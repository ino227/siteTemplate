var gulp = require('gulp');

gulp.task('copy', function() {
    gulp.src(['app/src/images/**'])
    .pipe(gulp.dest('app/product/images'));
});
