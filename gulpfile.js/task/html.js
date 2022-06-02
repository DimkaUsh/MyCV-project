const { src, dest } = require('gulp');

// Конфиг
const path = require('../config/path');
const app = require('../config/app');

//Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const gulpsize = require('gulp-size');

// Обработка HTML
const html = () => {
  return src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'HTML',
          message: error.message,
        })),
      }),
    )
    .pipe(fileInclude())
    .pipe(gulpsize({ title: 'До сжатия' }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(gulpsize({ title: 'После сжатия' }))
    .pipe(dest(path.html.dest));
};

module.exports = html;
