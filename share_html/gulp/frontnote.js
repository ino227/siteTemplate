var gulp = require('gulp');
var frontnote = require('gulp-frontnote');
var plumber = require('gulp-plumber');
var config = require('./config');

gulp.task('frontnote', function() {
	gulp.src(config.css.src)
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(frontnote({
			out: 'docs/css'//docs/cssにスタイルガイドを生成します。
		}))
		//.pipe(gulp.dest('app/product/css/dist'))
});
