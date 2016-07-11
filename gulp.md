# gulp manual

## 使い方

`vagrant up`でvagrantを起動する  
`vagrant ssh`でvagrantにログイン  
`cd /var/www/html/`で階層を移動する
`npm install`でnode moduleをインストールする

## ディレクトリ構造

    share_html （vagrant内と同期）
    ├── app
    │   ├── product（ドキュメントルート）
    │   │   ├── css
    │   │   ├── fonts
    │   │   ├── images
    │   │   └── js
    │   └── src（開発用フォルダ。こっちで作ったファイルがproductフォルダにいろいろやってから移動する）
    │       ├── components（ejsでコンポーネントを作る際にまとめておくフォルダ）
    │       │   ├── site-footer（コンポーネント単位でフォルダにしておく）
    │       │   └── site-header
    │       ├── fonts（iconfont作成用※触らない）
    │       ├── iconfont（iconfont作成用※触らない）
    │       ├── images（画像保管用フォルダ）
    │       │   └── sprite（sprite画像を書き出すためのフォルダ）
    │       ├── index.ejs（トップページ用ejsファイル）
    │       ├── js（jsファイル格納用）
    │       ├── sass（メインのsassファイルを格納用）
    │       └── svg（iconfont用のsvg格納用）
    ├── docs
    │   └── css（frontnote用フォルダ）
    └── gulp（gulp設定用）




## gulpコマンド

    gulp

1. ejsファイルからHTMLに書き出し
1. 書き出されたHTMLの構文チェック
1. svgをwebfontに変換
1. scssファイルの監視＆cssに書き出し
1. 書き出されたcssからfrontnoteの生成
1. jsファイルの構文チェック＆minify化
1. sprite画像の生成
1. 画像の圧縮

### sassファイルからcssに書き出す

    gulp sass

使い方

`app/src/sass/*.scss`を`app/product/css`に書き出します。  
書き出す際に`autoprefixer`で自動的にprefixを追加します。

### sprite画像の生成

    gulp sprite

`./app/src/images/sprite/*.png`をsprite画像に変更します。

### ejsファイルをhtmlファイルに書き出す

    gulp ejs

`app/src/**/*.ejs`をhtmlファイルで書き出し`app/product`にコピーする。  
ただし`_*.ejs`ファイルは書き出し対象ではない。

共通の変数は`share_html/app/pages.json`に記述

### gulp babel

### gulp webpack

### gulp ftp

### gulp frontnote

gulp-frontnoteでスタイルガイドを生成します。  
スタイルガイドは`docs/css/`に出力されます。

### gulp imagemin

画像を圧縮します

インストール

    npm install --save-dev gulp-imagemin

使い方

    gulp imagemin

`app/src/images/**/*`の画像を圧縮し`app/product/images/`に保存します。

### gulp jsdoc

JSDocを生成します。

使い方

    gulp jsdoc

`./app/src/**/*.js`のjsファイルから`docs`フォルダにJSDocを作成します。
