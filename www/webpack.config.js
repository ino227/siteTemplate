var webpack = require("webpack");
var path = require('path');

module.exports = {
    output: {
        filename: "module.js" //出力されるファイル名
    },
    resolve: {
        extensions: ['', '.js', '.coffee', '.html'], //拡張子を省略できる
        modulesDirectories: ['node_modules', 'bower_components'],
        alias: { //bowerでインストールしたjqueryプラグインで以下にaliasを貼るとrequire('TweenMax');のようにパス無しでつかえる
            bower: 'bower_components',
            TweenLite: __dirname + '/bower_components/gsap/src/uncompressed/TweenLite.js',
            TweenMax: __dirname + '/bower_components/gsap/src/uncompressed/TweenMax.js',
            TimelineLite: __dirname + '/bower_components/gsap/src/uncompressed/TimelineLite.js',
            TimelineMax: __dirname + '/bower_components/gsap/src/uncompressed/TimelineMax.js',
            ScrollMagic: __dirname + '/bower_components/ScrollMagic/js/jquery.scrollmagic.js',
            bxSlier: __dirname + '/bower_components/bxslider/jquery.bxSlider.min.js',
            niceScroll: __dirname + '/bower_components/nicescroll/jquery.nicescroll.js',
            colorbox: __dirname + '/bower_components/colorbox/jquery.colorbox.js'
        }
    },
    module: {
        loaders: [ //使用するloaderを記述ココに書く場合とrequire時にパスの前に書くものとがある
            { test: /\.coffee$/, loader: 'coffee' },
            { test: /\.html/, loader: "underscore-template-loader" }
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.ProvidePlugin({　//jqueryはグローバルに出す設定。これでrequireせず使えるのでjqueryプラグインもそのまま動く。
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery"
        })
    ]
};
