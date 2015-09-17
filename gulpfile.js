'use strict';

var gulp = require('gulp');
var bs = require('browser-sync').create();
var nightwatch = require('nightwatch');

gulp.task('serve:test', function (callback) {
  bs.init({
    notify: false,
    port: 9100,
    open: false,
    server: { baseDir: ['app'] },
    snippetOptions: { blacklist: ['/'] },
    ui: false
  }, function() {
    callback();
  });
});

gulp.task('test', ['serve:test'], function () {
  nightwatch.runner({
    config: 'nightwatch.json',
    env: 'default'
  }, function (passed) {
    if (passed) {
      process.exit();
    }
    else {
      process.exit(1);
    }
  });
});
