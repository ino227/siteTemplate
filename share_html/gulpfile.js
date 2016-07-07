var gulp = require('gulp');
require('./gulp/copy.js');
require('./gulp/sprite.js');
require('./gulp/sass.js');
require('./gulp/imagemin.js');
require('./gulp/ejs.js');
require('./gulp/iconfont.js');
require('./gulp/frontnote.js');
require('./gulp/jsdoc.js');
require('./gulp/script.js');
// require('./gulp/babel.js');
// require('./gulp/webpack.js');
// require('./gulp/ftp.js');
var htmlhint = require('gulp-htmlhint'); // (*2)
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var reload        = browserSync.reload;
var watch = require('gulp-watch');

gulp.task('htmlhint', function(){
    gulp.src('app/product/**/*.html')
        .pipe(plumber())
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
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

gulp.task('build',[
  'ejs',
  'htmlhint',
  'iconfont',
  'sass',
  'script',
  'sprite',
  'imagemin'
]);
gulp.task('default', function() {
    gulp.watch(['app/src/*.ejs', 'app/src/**/*.ejs'],['ejs']);
    //gulp.watch('app/product/**/*.html',['htmlhint']);
    gulp.watch('app/src/svg/*.svg',['iconfont']);
    gulp.watch('app/src/**/*.scss',['sass']);
    gulp.watch('app/product/css/**/*.css',['frontnote']);
    gulp.watch('app/src/js/*.js',['script']);
    gulp.watch('app/src/images/sprite/*.png',['sprite']);
    gulp.watch('app/src/images/**/*',['imagemin']);
    //gulp.watch('app/src/js/*.js',['babel']);
    //gulp.watch('app/product/**/*', reload);
});
