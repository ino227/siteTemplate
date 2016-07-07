// gulp
var gulp = require("gulp");

// gulp-jsdoc
var jsdoc = require("gulp-jsdoc");

// プロジェクト情報
var infos = {
  // プロジェクト名
  name: "SampleJS",

  // バージョン
  version: "1.0.0"
};

// HTMLのテンプレート設定
var template = {
  // テンプレートプラグイン「ink-docstrap」を使用する
  path: "ink-docstrap",

  // プロジェクト名 ページタイトル・ヘッダーの左上に表示されます
    systemName: "SampleJS",

    // HTMLのスタイルテーマ
    // cerulean, cosmo, cyborg, darkly, flatly, journal, lumen, paper, readable, sandstone, simplex, slate, spacelab, superhero, united, yetiの中から選べます
    theme: "cosmo",

    // ソースコードに行番号を表示するかどうか
    linenums: true
};

// オプション
var options = {
    // ソースコードを記述したHTMLを生成するかどうか
    outputSourceFiles: true
};

// jsdocを書き出すタスク
gulp.task("jsdoc", function() {
  // 書き出されるindex.htmlに「README.md」を埋め込む
  gulp.src(["./app/src/**/*.js", "README.md"])
    .pipe(jsdoc.parser(infos))
    .pipe(jsdoc.generator("./docs/js/", template, options))
});

// watch
// gulp.task("watch", function() {
//   gulp.watch("./app/src/**/*.js", ["jsdoc"])
// });

// 起動時に一度jsdocタスクを実行しwatchを開始
//gulp.task("default", [ "watch", "jsdoc" ]);
