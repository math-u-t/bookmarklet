# オーバーレイ #

## 概要 ##

クリックすると**薄い黒色のオーバーレイ**が表示され、画面を覗かれたくないときに便利です。
再度クリックすると非表示になります。

* 1秒ごとに最前面に移動するよう設計されています。
* オーバーレイの **暗さ（透明度）** は自由にカスタマイズ可能です。

## 使用方法

1. 以下のコードを**ブックマークのURL欄**にコピーして登録してください。
2. ページ上でそのブックマークをクリックすると機能します。

## ブックマークレットコード ##

```javascript
javascript:(function(c,d){var o=d.getElementById('my-overlay');if(o){o.style.display=o.style.display==='none'?%27block%27:%27none%27;}else{o=d.createElement(%27div%27);o.id=%27my-overlay%27;o.style.position=%27fixed%27;o.style.top=0;o.style.left=0;o.style.width=%27100vw%27;o.style.height=%27100vh%27;o.style.backgroundColor=c;o.style.cursor=%27pointer%27;o.style.pointerEvents=%27none%27;d.body.appendChild(o);}setInterval(function(){o.style.zIndex=99999;},1000);})(%27rgba(0,0,0,0.7)%27,document);
```

## カスタマイズ ##

* `rgba(0,0,0,0.7)` の部分を変更することで\*\*暗さ（透明度）\*\*を調整できます。

  * 例: `'rgba(0,0,0,0.5)'` → より透明に
  * 例: `'rgba(0,0,0,0.9)'` → より暗く