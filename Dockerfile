ARG NODE_VERSION=14.4.0-alpine

###
# STAGE 1: Base
###
FROM node:$NODE_VERSION as base

ENV NODE_PATH=/src
WORKDIR $NODE_PATH

###
# STAGE 2: Build
###

FROM base as build

COPY package.json yarn.lock .yarnrc ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build
RUN yarn install --production --ignore-scripts --prefer-offline --frozen-lockfile && yarn cache clean

###
# STAGE 3: Production
###
FROM nginx:1.13.12-alpine AS production

ENV NODE_PATH=/src
ENV APP_PORT=3000

WORKDIR $NODE_PATH

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build $NODE_PATH/build /usr/share/nginx/html
COPY --from=build $NODE_PATH/node_modules ./node_modules
COPY --from=build $NODE_PATH/package.json ./
COPY --from=build $NODE_PATH/babel.config.js ./
# COPY --from=build $NODE_PATH/secrets.js ./

EXPOSE $APP_PORT

# CMD yarn start
CMD ["nginx", "-g", "daemon off;"]
