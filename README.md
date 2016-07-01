# 開発環境

## OS：centos6.4

----

http://momijiame.tumblr.com/post/65429388802/vagrant-%E3%81%A7%E4%BD%9C%E3%81%A3%E3%81%9F%E4%BB%AE%E6%83%B3%E3%83%9E%E3%82%B7%E3%83%B3%E3%81%8B%E3%82%89-box-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E4%BD%9C%E3%82%8A%E3%81%AA%E3%81%8A%E3%81%99

----
# ■インストール
※node.jsなどは予め準備しておいてください。

`npm install`

# ■ejsの使い方

## pages.json
`ejs/pages.json`で生成したいページを指定する

# apache

バージョン

    httpd -v
    Server version: Apache/2.2.15 (Unix)
    Server built:   Mar 22 2016 19:03:53

httpd.conf編集

    vi /etc/httpd/conf/httpd.conf


apacheの設定追加

    EnableSendfile off //更新が反映されない対策

apacheの構文エラーがないかチェックする

    apachectl configtest


## PHP

バージョン

    [root@localhost etc]# php -v
    PHP 5.3.3 (cli) (built: Feb  9 2016 10:36:17)
    Copyright (c) 1997-2010 The PHP Group
    Zend Engine v2.3.0, Copyright (c) 1998-2010 Zend Technologies

php.ini編集

    vi /etc/php.ini

## mysql

ID：root

パスワード：passw0rd


    /etc/rc.d/init.d/mysqld restart
    /etc/rc.d/init.d/mysqld start


## phpMyAdmin 4.0.10.15

https://www.phpmyadmin.net/downloads/


    # vi /etc/hosts
    # vi /etc/httpd/conf/httpd.conf
    # service httpd restart

## Git

    [root@localhost mysql]# git --version
    git version 1.7.1

## Sass

    [root@localhost mysql]# sass -v
    DEPRECATION WARNING:
    Sass 3.5 will no longer support Ruby 1.8.7.
    Please upgrade to Ruby 2.0.0 or greater as soon as possible.
    Sass 3.4.22 (Selective Steve)


## Compass

    [root@localhost mysql]# compass -v
    DEPRECATION WARNING:
    Sass 3.5 will no longer support Ruby 1.8.7.
    Please upgrade to Ruby 2.0.0 or greater as soon as possible.

    Compass 1.0.3 (Polaris)
    Copyright (c) 2008-2016 Chris Eppstein
    Released under the MIT License.
    Compass is charityware.
    Please make a tax deductable donation for a worthy cause: http://umdf.org/compass



## ruby

    [root@localhost mysql]# ruby --version
    ruby 1.8.7 (2013-06-27 patchlevel 374) [x86_64-linux]

### rbenvを使ったrubyのインストール

参考サイト

http://dotnsf.blog.jp/archives/1020034700.html

インストールできるrubyのバージョンを確認

    # rbenv install -l

インストールしたいrubyのバージョンをインストール

    # rbenv install X.X.X

デフォルトのrubyのバージョンを変更

    # rbenv global X.X.X

インストールしたrbenvを消す方法

    # sudo rm -rf /opt/rbenv


## gulp

    gulp -v
    [13:03:55] CLI version 3.9.：1
    [13:03:55] Local version 3.9.1

### gulpの使い方

gulpプラグインをインストールする

    npm install --save-dev [gulp-<plugin name>]

node_modulesを削除する

    rm -rf node_modules/ && npm cache clean

node_modulesを再インストールする

    rm -rf node_modules/ && npm cache clean && npm install


### インストールオプション

--save

dependenciesに追記する。ソースコードの依存モジュールを追記していくのが望ましい。（例：jQueryやjQuery関連プラグインなど）

--save-dev

devDependenciesに追記する。開発環境の依存モジュールを追記していくのが望ましい。（例：gulpやgulp-sass、EJSなど）

--save-optional

optionalDependenciesに追記する。--saveとほぼ同じだが、モジュールが見つからなかった場合はスルーしてくれる。


### gulpfile.js

gulp watchする内容などを記載する。

その他、gulpフォルダのタスクをrequireする。

### gulpフォルダ

インストールしたプラグインのタスクファイルをまとめる用

     gulp [file name]

上記のコマンドでファイルを実行できるようにしておく。

追加したものはgulpfile.jsにrequireする。


### .eslintrc

ESLintの設定ファイル


## node

    node -v
    v4.3.1

## nvm

nodeのバージョン管理ツール

    nvm --version
    0.31.0

nvmを有効化します

    source ~/.nvm/nvm.sh

nvmを自動的に有効化するために.bashrcに追記しています。

バージョン指定でnode.jsをインストールして有効化

    nvm install v0.10.24

0.10.x系最新バージョンのnode.jsをインストールして有効化

    nvm install 0.10

0.x系最新バージョンのnode.jsをインストールして有効化

    nvm install 0

現在のバージョンを確認

    nvm current

インストール可能なnode.jsのバージョン一覧

    nvm ls-remote

インストール済node.jsのバージョン一覧

    nvm ls

バージョンを0.x系に切り替えて有効化

    nvm use 0.10

myApp.jsをバージョンを0.10.24を使って実行

    nvm run 0.10.24 myApp.js

nvm実行時にバージョンを指定してnode.jsを有効化

    nvm alias default 0.10.24

## bower

    bower -v
    1.7.9


## bourbon

sassを便利に使うmixin集

    bourbon -v
    DEPRECATION WARNING:
    Sass 3.5 will no longer support Ruby 1.8.7.
    Please upgrade to Ruby 2.0.0 or greater as soon as possible.

    Bourbon 4.2.7

## yumの使い方

インストールしているコマンドの確認

    yum list installed | grep zip
