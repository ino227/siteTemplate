var gulp = require('gulp');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
var pleeease = require('gulp-pleeease');
/*
pleeeaseのドキュメント
http://pleeease.io/docs/
*/
var config = require('./config');


gulp.task('sass',function(){
  gulp.src([config.css.src])
    .pipe(sass(config.css.sassOptions))
    .pipe(pleeease({
        autoprefixer: config.css.autoprefixer,
        minifier: config.css.minifier
    }))
    .pipe(gulp.dest(config.css.dest));
});
