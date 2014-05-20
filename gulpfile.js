var gulp = require('gulp'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config');

gulp.task('default', ['css', 'webpack'], function() {
  gulp.src('app/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  gulp.src('app/assets/css/*.css')
      .pipe(gulp.dest('dist/css'));
});

gulp.task('webpack', function (cb) {
  webpack(webpackConfig, function(err, stats) {
    console.log(stats.toString());
    cb();
  });
});

