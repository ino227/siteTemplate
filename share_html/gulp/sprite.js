var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', () => {
    var spriteData = gulp.src('./app/src/images/sprite/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',                        // スプライト画像
            cssName: '_sprite.scss',                      // 生成される CSS テンプレート
            imgPath: './app/product/images/sprite.png', // 生成される CSS テンプレートに記載されるスプライト画像パス
            //cssFormat: 'scss',                            // フォーマット拡張子
            cssVarMap: (sprite) => {
                sprite.name = "sprite-" + sprite.name;      // 生成される CSS テンプレートに変数の一覧を記述
            },
            retinaSrcFilter: './app/src/images/sprite/*@2x.png',
            retinaImgName: 'sprite@2x.png',
            retinaImgPath: './app/product/images/sprite@2x.png'
    }));
    spriteData.img
        .pipe(gulp.dest('./app/src/images/'));     // imgName で指定したスプライト画像の保存先
    return spriteData.css
        .pipe(gulp.dest('./app/src/sass/commons'));       // cssName で指定した CSS テンプレートの保存先
});

gulp.task('default', ['sprite']);
