const pathSrc = './src';
const pathDest = './public';

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + '/html/*.html',
    watch: pathSrc + '/html/**/*.html',
    dest: pathDest,
  },

  scss: {
    src: pathSrc + '/scss/*.+(scss|sass)',
    watch: pathSrc + '/scss/**/*.+(scss|sass)',
    dest: pathDest + '/css',
  },

  js: {
    src: pathSrc + '/js/*.js',
    watch: pathSrc + '/js/**/*.js',
    dest: pathDest + '/js',
  },

  img: {
    src: pathSrc + '/assets/img/*.+(jpg|svg|png)',
    watch: pathSrc + '/assets/img/**/*.+(jpg|svg|png)',
    dest: pathDest + '/assets/img',
  },
};
