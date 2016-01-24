var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');
//var uglify = require('gulp-uglify');


watch(['./app/*.js'], function() {
  console.log("[exoplanetjs] App has been modified; re-compiling.");
  gulp.start('default');
});

gulp.task('default', function() {
  return browserify('./app/app.js')
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('exoplanetjs.js'))
        .pipe(gulp.dest('./dist/'))
});
