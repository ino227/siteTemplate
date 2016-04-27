var gulp = require('gulp');
var ejs = require('gulp-ejs');

var datas = {
  title:'test site',
  message:'hello world'
}

var settings = {
  ext: '.html'
}

gulp.task('ejs',function(){
  gulp.src(['app/src/ejs/*.ejs', '!app/src/ejs/_*.ejs'])
    .pipe(ejs(datas, settings))
    .pipe(gulp.dest('app/product'));
});
