const { src, dest } = require('gulp');

// Конфиг
const path = require('../config/path');
const app = require('../config/app');

//Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

// Обработка JS
const js = () => {
  return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'JS',
          message: error.message,
        })),
      }),
    )
    .pipe(
      babel({
        presets: ['env'],
      }),
    )
    .pipe(webpack(app.webpack)) // позволяет компоновать код вебпаком
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
};

module.exports = js;
