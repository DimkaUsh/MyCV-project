const del = require('del');

// Конфиг
const path = require('../config/path');

// Удаление директории
const clear = () => {
  return del(path.root);
};

module.exports = clear;
