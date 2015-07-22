'use strict';

var gulp = require('gulp')
var gutil = require('gulp-util')
var plumber = require('gulp-plumber')
var sass = require('gulp-sass')
var browserify = require('gulp-browatchify')
var source = require('vinyl-source-stream');



gulp.task('styles', function() {
  return gulp.src('./public/stylesheets/**/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./public/stylesheets/'))
});


//gulp.task('compass',function(){
//  return gulp.src('./public/stylesheets/*.scss')
//      .pipe(plumber())
//      .pipe(sass({outputStyle: 'compressed'}))
//      .pipe(gulp.dest('./public/stylesheets/'))
//})

gulp.task('watch', ['styles', 'browserify'], function() {
  gulp.watch('./public/stylesheets/*.scss', ['styles'])
  gulp.watch('./index.js', ['browserify'])
});

gulp.task('browserify', function() {

  return gulp.src('./index.js')
    .pipe(browserify())
    .pipe(source('bundleBrowserified.js'))
    .pipe(gulp.dest('./public'))

});


gulp.task('default', ['styles', 'browserify', 'styles'], function() {
  
});
