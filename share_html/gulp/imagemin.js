var gulp = require('gulp');
// 画像を圧縮するプラグインの読み込み
var imagemin = require("gulp-imagemin");

gulp.task("imagemin", function() { // 「imageMinTask」という名前のタスクを登録
    gulp.src("app/src/images/**/*.png")    // imagesフォルダー以下のpng画像を取得
        .pipe(imagemin())   // 画像の圧縮処理を実行
        .pipe(gulp.dest("app/product/images/"));   // minified_imagesフォルダー以下に保存
});
