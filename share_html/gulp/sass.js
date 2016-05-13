var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var options = {
  outputStyle:'compressed',
  sourceMap: true,
  sourceComments: false
}

var autoprefixerOptions = {
  browser:['last 3 verstion', 'ie >= 6', 'Android 4.0']
}

gulp.task('sass',function(){
  gulp.src('app/src/sass/*.scss')
    .pipe(sass(options))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('app/product/css'));
});
