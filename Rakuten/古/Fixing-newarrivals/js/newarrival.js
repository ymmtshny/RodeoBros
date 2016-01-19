// JavaScript Document

//
// 出力するHTMLタグは自由に変更してください。
//
var newarrival = function(d) {
  var rakuten = '<ol>'; 
  for (var i in d) {
    rakuten += '<li>'; 
    rakuten += '<a href="' + d[i].url + '" />';
    rakuten += '<img src="' + d[i].image + '" /></a>';
    rakuten += '<p>' + d[i].name + '</p>';
	rakuten += '<p>' + d[i].brand + '</p>';
    rakuten += '</li>'; 
  }
  rakuten += '</ol>'; 
  document.write(rakuten);
}

//まとめ
//画像URLは3サイトとも同じ楽天のキャビネット下にある。
//画像の違いは、カラバリの有無によりアマゾンかブランドのフォルダ内に存在するか
//リンクは３サイトとも品番のみによって管理されている。
//jsonとして必要なデータをnumber, image, brand, name　とすると
/*
画像リンクは
http://image.rakuten.co.jp/auc-rodeo/cabinet/[image]-0.jpg

リンクは
楽天：http://item.rakuten.co.jp/auc-rodeo/[number]/
公式：http://www.aun-wa.com/SHOP/[number].html
ヤフー：http://store.shopping.yahoo.co.jp/rodeobros/[number].html



*/


//***************************************************************************************
//楽天 NEW ARRIVAL
//---------------------------------------------------------------------------------------

/*<li>
<div class="ho">
<a href="http://item.rakuten.co.jp/auc-rodeo/kmsj-100/" target="_top"> //リンク
<img src="http://image.rakuten.co.jp/auc-rodeo/cabinet/kaminari/kmsj-100-0.jpg" //画像URL
width="190" height="190px" style="padding:15px; background-color:white;" alt="" />
<span><p style="margin-top:90px;text-align:center;">KAMINARI<br />　//ブランド
Kenmeri Japan Nylon Jacket</p></span></a></div> //商品名
</li>*/

//***************************************************************************************
//ヤフー
//---------------------------------------------------------------------------------------

/*<li>
        <a href="http://store.shopping.yahoo.co.jp/rodeobros/ulsj-002.html" target="_top">　//リンク
            <img src="http://image.rakuten.co.jp/auc-rodeo/cabinet/amazon2/ulsj-002-0.jpg"><br>　//画像URL
                <h6>Ultraman</h6>　//ブランド
                <p>Jet-Vtol Reversible Souvenir jacket</p>　//商品名
        </a>
 </li>*/


//***************************************************************************************
//公式 NEW ARRIVAL
//品番、amazon02/品番-0.jpg、
//---------------------------------------------------------------------------------------

/*<div class="ho">
<a href="http://www.aun-wa.com/SHOP/ulsj-002.html" target="_top">
<img src="http://image.rakuten.co.jp/auc-rodeo/cabinet/amazon2/ulsj-002-0.jpg" width="220" height="220px" alt="" />
<span><p style="margin-top:90px;text-align:center;">Ultraman<br />Jet-Vtol</p></span></a></div>
<div style="height:20px;"><!--// Tops Outer↑　↓Bottom Accessory //--></div>
<div class="ho"><a href="http://www.aun-wa.com/SHOP/ulsj-003.html" target="_top">
<img src="http://image.rakuten.co.jp/auc-rodeo/cabinet/amazon2/ulsj-003-0.jpg" width="220" height="220px" alt="" />
<span><p style="margin-top:90px;text-align:center;">Ultraman<br />Poiner</p></span></a></div>
</li>*/