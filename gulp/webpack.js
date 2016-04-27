var gulp = require('gulp');
var webpack = require('gulp-webpack');

var options = {
  output:{//出力ファイルオプション
    filename:'[name].js',//エントリーポイント
    sourseMapFilename:'map/[file].map'//ソースマップの出力ディレクトリの設定
  },
  /*
    ソースマップをアウトプットするファイルに組み込むか、別ファイルにするかの設定
    '#inline-source-map':組み込む
    'source-map':外部ファイルにする
  */
  devtool:'#inline-source-map',
  resolve:{
    //読み込みモジュールのパスやエイリアスの設定
    modulesDirectories:[
      //requireを使用した際に、そのルートディレクトリをあらかじめ設定することでそのディレクトリを自動で探しに行きます。
      'bower_components',
      'node_modules',
      'src'
    ],
    alias:{
      //自分で探す用のパスを自身で設定することが出来ます。その際は絶対パスで指定します。
    }
  },
  module:{
    //ローダーと呼ばれる、ファイルの読み込みに関するオプション。
    //詳しくは
    //https://webpack.github.io/docs/list-of-loaders.html
  },
  plugins:[
  ]
};

gulp.task('webpack',function(){
  gulp.src('app/src/js/app.js')
    .pipe(webpack())
    .pipe(gulp.dest('app/product/js'));
});
