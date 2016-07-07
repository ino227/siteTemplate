var gulp = require('gulp'),
svgmin = require('gulp-svgmin'),
iconfontCss = require('gulp-iconfont-css'),
iconfont = require('gulp-iconfont'),
plumber  = require( 'gulp-plumber' );

gulp.task('iconfont',['iconfont-hoge'], function () {
  gulp.src('./app/src/fonts/*')
    .pipe(gulp.dest('./app/product/fonts/'));  // release配下にフォントファイルをコピー
});

gulp.task('iconfont-hoge', function (callback) {

  var svgminData = gulp.src('./app/src/svg/*.svg')
    .pipe(svgmin());  // svgファイルを圧縮

  svgminData.pipe(plumber())
    .pipe(iconfontCss({  // アイコンフォントのscssを生成する
        fontName: 'iconfont',
        path: './app/src/iconfont/iconsTemplate.scss',  // icons.scssのテンプレート
        targetPath: '../sass/setting/_icons.scss',  // 生成するscssのパス
        fontPath: '../fonts/'  //scssからfontファイルへのパス。最終的にrelease配下に置かれた際に読み込めるパスにする
    }))
    .pipe(iconfont({  // アイコンフォントを生成する
        fontName: 'iconfont',
        formats: ['ttf', 'eot', 'woff', 'svg'],
        appendCodepoints:false
    }))
    .pipe(gulp.dest('./app/src/fonts')) //develop配下にscssとiconfontを生成
    .on('end', function(){  // iconfont-hogeが完了してからiconfontを実行
        callback();
    });
});
