'use strict';
const gulp     = require( 'gulp' );
const fs       = require( 'fs' );
const plumber  = require( 'gulp-plumber' );
const rename   = require( 'gulp-rename' );
const ejs      = require( 'gulp-ejs' );
var config = require('./config');

gulp.task('ejs',function(){
  var json = JSON.parse(fs.readFileSync("./pages.json"));
  gulp.src([config.ejs.src+'/*.ejs', '!'+config.ejs.src+'/_*.ejs'])
    //.pipe(ejs(config.ejs.settings))
    .pipe(ejs(json, {"ext": ".html"}))
    .pipe(gulp.dest(config.ejs.dest));
});
