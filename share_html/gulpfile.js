var gulp = require('gulp');
require('./gulp/copy.js');
require('./gulp/sprite.js');
require('./gulp/sass.js');
require('./gulp/imagemin.js');
require('./gulp/ejs.js');
require('./gulp/babel.js');
require('./gulp/webpack.js');
require('./gulp/frontnote.js');
require('./gulp/ftp.js');
require('./gulp/jsdoc.js');
var htmlhint = require('gulp-htmlhint'); // (*2)
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var reload        = browserSync.reload;

gulp.task('html', function(){
    gulp.src('app/src/**/*.html')
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
        .pipe(gulp.dest('app/product/'))
        .pipe(browserSync.stream());
});

// gulp.task("server", function() {
//   browserSync.init({
//     host: "192.168.33.10",
//     open: false
//   });
// });

gulp.task('browser-sync', function() {
    browserSync.init({
        //server: "./app/product"
        proxy: "development.local/"
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});
gulp.task('script',function(){
  gulp.src('app/src/js/*.js')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.result(function(result){
      if(result.errorCount !== 0){
        return
      }
      gulp.src(result.filePath)
        .pipe(gulp.dest('app/product/js/'))
    }))
    .pipe(browserSync.stream());
});

gulp.task('default', ['browser-sync'], function() {
    gulp.watch('app/src/sass/*.scss',['sass']);
    gulp.watch('app/src/**/*.html',['html']);
    gulp.watch('app/src/js/*.js',['script']);
    gulp.watch('app/src/js/*.js',['babel']);
    gulp.watch(['app/src/ejs/**/*.ejs', '!app/src/ejs/**/_*.ejs'],['ejs']);
    gulp.watch('app/src/images/*.js',['imagemin']);
    gulp.watch('app/product/**/*', reload);
});
