var gulp = require('gulp');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
var pleeease = require('gulp-pleeease');
var concat = require("gulp-concat");
var minifyCss = require('gulp-minify-css');
/*
pleeeaseのドキュメント
http://pleeease.io/docs/
*/
var config = require('./config');


gulp.task('sass',['frontnote'],function(){
  gulp.src([config.css.src,'!./app/src/iconfont/iconsTemplate.scss'])
    .pipe(sass(config.css.sassOptions))
    .pipe(pleeease({
        autoprefixer: config.css.autoprefixer,
        minifier: config.css.minifier
    }))
    .pipe(concat('all.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(config.css.dest));
});
