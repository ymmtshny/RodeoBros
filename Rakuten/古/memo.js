//http://item.rakuten.co.jp/auc-rodeo/c/0000000630/
//get src on this url
//I want to change src 

var foo = document.getElementById("risFil");
var x = foo.getElementsByTagName('table')[1];
var y = x.getElementsByTagName("tr");
var z = y[0].children[0].children[0];
z.getElementsByTagName('img')[0].src.split('=')[1];