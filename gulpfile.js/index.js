const { src, dest, watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

// Конфиг
const path = require('./config/path');
const app = require('./config/app');

//Задачи
const clear = require('./task/clear');
const html = require('./task/html');
const scss = require('./task/scss');
const js = require('./task/js');
const img = require('./task/img');

//Server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root, // откуда запуск
    },
  });
};

//Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
  watch(path.img.watch, img).on('all', browserSync.reload);
};

const build = series(clear, parallel(html, scss, js, img));

const dev = series(build, parallel(watcher, server));

// Задачи
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;

//Сборка
exports.default = app.isProd ? build : dev;
