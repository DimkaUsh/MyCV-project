const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
  isProd: isProd,

  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd,
  },

  webpack: {
    mode: isProd ? 'production' : 'development',
  },
};
