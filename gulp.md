# gulp manual


    gulp

sassファイルの監視
htmlファイルの監視
jsファイルの監視
ejsファイルの監視

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

 `app/src/ejs/*.ejs`をhtmlファイルで書き出し`app/product`にコピーする。
 ただし`_*.ejs`ファイルは書き出し対象ではない。

### 画像をコピーする

    gulp copy

`app/src/images/`内の画像を`app/product/images`内にコピーします

### gulp babel

### gulp webpack

### gulp ftp

### gulp doc

gulp-frontnoteでスタイルガイドを生成します。

スタイルガイドは`docs/css/`に出力されます。

### gulp imagemin

画像を圧縮します

インストール

    npm install --save-dev gulp-imagemin

使い方

    gulp imagemin

`app/src/images/**/*.png`の画像を圧縮し`app/product/images/`に保存します。

### gulp jsdoc

JSDocを生成します。

使い方

    gulp jsdoc

`./app/src/**/*.js`のjsファイルから`docs`フォルダにJSDocを作成します。
