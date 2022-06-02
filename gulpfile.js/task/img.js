const { src, dest } = require('gulp');

// Конфиг
const path = require('../config/path');
const app = require('../config/app');

//Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imageMin = require('gulp-imagemin');
const newer = require('gulp-newer');

// Обработка IMG
const img = () => {
  return src(path.img.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'IMG',
          message: error.message,
        })),
      }),
    )
    .pipe(newer(path.img.dest))
    .pipe(imageMin())
    .pipe(dest(path.img.dest));
};

module.exports = img;
