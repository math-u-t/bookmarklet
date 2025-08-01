# [オーバーレイ](bookmarklet/source/dark.js) #

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
javascript:(function(c,d){var o=d.getElementById('my-overlay');if(o){o.style.display=o.style.display==='none'?'block':'none';}else{o=d.createElement('div');o.id='my-overlay';o.style.position='fixed';o.style.top=0;o.style.left=0;o.style.width='100vw';o.style.height='100vh';o.style.backgroundColor=c;o.style.cursor='pointer';o.style.pointerEvents='none';d.body.appendChild(o);}setInterval(function(){o.style.zIndex=99999;},1000);})('rgba(0,0,0,0.7)',document);
```

## カスタマイズ ##

* `rgba(0,0,0,0.7)` の部分を変更することで\*\*暗さ（透明度）\*\*を調整できます。

  * 例: `'rgba(0,0,0,0.5)'` → より透明に
  * 例: `'rgba(0,0,0,0.9)'` → より暗く