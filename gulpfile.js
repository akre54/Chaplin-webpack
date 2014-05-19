var gulp = require('gulp'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config');

gulp.task('default', ['webpack'], function() {
  gulp.src('app/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('webpack', function (cb) {
  webpack(webpackConfig, function(err, stats) {
    console.log(stats.toString());
    cb();
  });
});

