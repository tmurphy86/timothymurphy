/**
 * @module babel.config
 * @see https://babeljs.io/docs/en/configuration
 *
 */

module.exports = function(api) {
  api.cache(true);

  return {
    babelrcRoots: [
      '.',
      'apps/*',
      'packages/*',
    ],
    plugins: [
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
    ],
    presets: [
      ['@babel/preset-env', {
        targets: { node: 'current' },
      }],
      '@babel/preset-react',
    ],
  };
};
