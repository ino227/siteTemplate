var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');

var options = {
    host: '',
    port: 21,
    user: '',
    pass: '',
    remotePath: '/home/www/'
};

gulp.task('ftp', function () {
    gulp.src('src/*')
    .pipe(ftp(options))
    .pipe(gutil.noop());
});
