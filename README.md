<!-- Author: Tim Murphy -->

<div align="center">
  <img src="./public/img/process.png" width="200" />
  <h3>Site Builder</h3>
</div>

<br />

<div align="center">  

  [![Jenkins](https://img.shields.io/badge/test-jenkins-blue?style=for-the-badge)](https://jenkins.inradar.net/blue/organizations/jenkins/automaton%2Fstore-demo-app/branches)
  [![Slack](https://img.shields.io/badge/slack-%23demo-purple?style=for-the-badge)](https://automaton.slack.com/archives/C011KC0MATV)
</div>



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Next Steps

Connect timeline to LinkedIn API.
Connect Photo rotation to Instagram API & Google Photos Lib.

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# Notes

## Development environment
Install yarn, npm, node, etc

## Local development
`yarn build `

## Docker development
cd to root of repo and run `docker build -t murphy-dev:latest .`
To run container locally `docker run -p 80:3000 murphy-dev/alpha:latest` add a `-d` switch to allow to run in the background.

## Updating `package.json`
Verify which packages are outdating either by checking their packages documentation or use 

To upgrade all dependencies use install `npm install -g npm-check-updates` (note the globally switch) & then running `ncu -u` which will update the json file. For local builds you will then need to run `yarn update`