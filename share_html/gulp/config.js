// @file config.js
var dest = './app/product'; // 出力先ディレクトリ
var src = './app/src';  // ソースディレクトリ
module.exports = {
  // 出力先の指定
  dest: dest,

  // jsのビルド設定
  ejs: {
    src: src + '/**',
    dest: dest + '/',
    uglify: false,
    settings : {
      ext: '.html'
    }
  },
  //autoprefixer
  css:{
    src: src + '/sass/*.scss',
    dest: dest + '/css',
    autoprefixer: {
        browsers: ['last 2 versions']
    },
    sassOptions:{
      outputStyle:'expanded',//compressed
      sourceMap: true,
      sourceComments: false
    },
    minifier: false // minify化
  }
}
