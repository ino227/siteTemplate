'use strict';
const gulp     = require( 'gulp' );
const fs       = require( 'fs' );
const plumber  = require( 'gulp-plumber' );
const rename   = require( 'gulp-rename' );
const ejs      = require( 'gulp-ejs' );
var config = require('./config');
var datas = {
  title:'test site',
  message:'hello world'
}

var settings = {
  ext: '.html'
}

gulp.task('ejs',function(){
  gulp.src([config.ejs.src+'/*.ejs', '!'+config.ejs.src+'/_*.ejs'])
    .pipe(ejs(datas, settings))
    .pipe(gulp.dest(config.ejs.dest));
});
