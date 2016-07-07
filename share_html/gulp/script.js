var gulp = require('gulp')
,uglify = require("gulp-uglify");
var eslint = require('gulp-eslint');
var concat = require("gulp-concat");
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');



gulp.task('js.concat', function() {
  return gulp.src('./app/src/js/*.js')
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./app/product/js'));
});

gulp.task('js.uglify', ['js.concat'], function() {
  return gulp.src('./app/product/js/main.js')
    .pipe(plumber())
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./app/product/js/'));
});

// 監視して処理するのをひとまとめにしておく。
gulp.task('js', ['js.concat', 'js.uglify']);

gulp.task('eslint',function(callback){
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
        .on('end', function(){  // iconfont-hogeが完了してからiconfontを実行
            callback();
        });
    }))
});

gulp.task('script',['eslint','js']);
