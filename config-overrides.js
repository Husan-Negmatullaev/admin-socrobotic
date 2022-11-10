const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  const baseUrl = "src/";
  alias({
    '@components': baseUrl + 'components',
    '@layouts': baseUrl + 'components/layouts',
    '@common': baseUrl + 'components/common',
    '@views': baseUrl + 'views',
    '@utils': baseUrl + 'utils',
    '@constants': baseUrl + 'utils/constants',
    '@helpers': baseUrl + 'utils/helpers',
    '@styles': baseUrl + 'styles',
    '@styles-variables': baseUrl + 'styles/base/variables.scss',
    '@mixins': baseUrl + 'styles/base/mixins.scss',
    '@icons': baseUrl + 'styles/fonts/icons.scss',
    '@services': baseUrl + 'services',
    '@hooks': baseUrl + 'services/hooks',
    '@fonts': baseUrl + 'assets/fonts',
    '@images': baseUrl + 'assets/img',
  })(config);

  return config;
};