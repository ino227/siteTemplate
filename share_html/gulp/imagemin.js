'use strict';
var gulp     = require('gulp'),
    imagemin = require('gulp-imagemin');

function debug() {
  var es = require('event-stream');

  return es.map(function (file, done) {
    console.log(file.path);
    done();
  });
}

function rescue(stream) {
  return stream.on('error', function (err) {
    console.error(err);
    // stream.emit('end');
  });
}

function imageminE(option) {
  return rescue(imagemin(option));
}

gulp.task('imagemin-gif', function () {
  return gulp.src('./app/src/**/*.gif').
    pipe(imageminE({ interlaced: false })).
    pipe(gulp.dest('./app/product/'));
});

gulp.task('imagemin-jpeg', function () {
  return gulp.src('./app/src/**/*.+(jpg|jpeg)').
    pipe(imageminE({ progressive: true })).
    pipe(gulp.dest('./app/product/'));
});

gulp.task('imagemin-png', function () {
  //return gulp.src('./app/src/+(!node_modules|**)/*.png').
  return gulp.src(['./app/src/**/*.png','!./app/src/images/sprite/*.png']).
    pipe(imageminE({ optimizationLevel: 7 })).
    pipe(gulp.dest('./app/product/'));
});

gulp.task('imagemin', ['imagemin-gif', 'imagemin-jpeg', 'imagemin-png']);
