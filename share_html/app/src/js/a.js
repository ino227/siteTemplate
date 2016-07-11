/**
 * @fileOverview ギタークラスを記述するファイルです。
 *
 * @author Naoki Yamada
 * @version 1.0.0
 */

/**
 * ギターのモデル名とメーカー名をセットします。
 *
 * @class ギターエンティティのクラスです。<br />
 * ギターのモデル名とメーカー名の情報を保有し、それらを取り扱う機能を保有します。
 *
 * @param {String} modelname モデル名
 * @param {String} vendor    メーカー名
 */
var Guitar = function(modelname, vendor) {

  /**
   * モデル名
   *
   * @return {String}
   */
  this.modelname = modelname;

  /**
   * メーカー名
   *
   * @return {String}
   */
  this.vendor = vendor;

  /**
   * ギターを紹介する文章を作成します。<br />
   * モデル名とメーカー名に愛称を付加して、紹介する文章を作成します。
   *
   * @param {String} nickname 愛称
   * @return {String} 紹介文
   *
   * @example
   * mainGuitar.introduceMyGuitar('ブラッキー');
   * 出力： 「私のギターはFenderのStratocasterというモデルで、ブラッキーと呼んでいます。」
   */
  this.introduceMyGuitar = function(nickname) {
    return '私のギターは' + this.vendor + 'の' + this.modelname + 'というモデルで、' + nickname + 'と呼んでいます。';
  }

}
