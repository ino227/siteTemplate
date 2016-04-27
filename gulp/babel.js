var gulp = require('gulp');
var babel = require('gulp-babel');
var beautify = require('gulp-beautify');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');

var isUglify = function() {
    if (typeof process.argv[3] !== "undefiend" && process.argv[3] === '-uglify') {
        return true;
    } else {
        return false;
    }
}
var beautifyOptions = {
    indent_size: 2,//インデントのサイズ
    indent_char: " ",//インデントの文字。タブの場合は\t
    eol: '\n',//改行コード
    end_with_newline: true//最後に改行を入れるか
};

gulp.task('babel',function(){
  gulp.src('app/src/js/app.js')
    .pipe(babel({
      presets:['es2015']
    }))
    .pipe(beautify(beautifyOptions))
    .pipe(gulpif(isUglify(), uglify()))
    .pipe(gulp.dest('app/product/js'));
});
