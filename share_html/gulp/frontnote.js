var gulp = require('gulp');
var frontnote = require('gulp-frontnote');
var plumber = require('gulp-plumber');

gulp.task('doc', function() {
	gulp.src('app/product/**/*.css')
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(frontnote({
			out: 'docs/css'//docs/cssにスタイルガイドを生成します。
		}))
		.pipe(gulp.dest('app/product/css/dist'))
});
