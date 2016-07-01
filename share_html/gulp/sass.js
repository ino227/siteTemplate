var gulp = require('gulp');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
var pleeease = require('gulp-pleeease');
/*
pleeeaseのドキュメント
http://pleeease.io/docs/
*/
var config = require('./config');
var options = {
  //compass : true // ←compassを使っている場合これを付ける
  outputStyle:'expanded',//compressed
  sourceMap: true,
  sourceComments: false
}

var autoprefixerOptions = {
  browser:['last 3 verstion', 'ie >= 6', 'Android 4.0']
}

gulp.task('sass',function(){
  gulp.src(config.css.src)
    .pipe(sass(options))
    .pipe(pleeease({
        autoprefixer: config.css.autoprefixer,
        minifier: config.css.minifier // minify無効
    }))
    .pipe(gulp.dest(config.css.dest));
});
