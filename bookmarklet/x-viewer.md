# [時計](bookmarklet/source/x-viewer.js) #

## 説明 ##

このBookmarkletをブラウザで実行すると、ポストのpv数をすべて取得して`alert`で表示します。

## 機能一覧 ##

* 現在は他人ポストも全て取得します。
* `span`タグで取得しているので構造が変わったら使えなくなります。

## Bookmarkletコード(コピー用) ##

```javascript
javascript:(()=>{const seen=new Set;document.querySelectorAll("span").forEach(el=>{if(el.closest('[aria-label*="リポストしました"]'))return;const txt=el.textContent?.trim();if(!txt||seen.has(txt))return;seen.add(txt);el.style.outline="2px solid red";});})();
```

## 使い方 ##

1. 上記コード全体を1行にまとめて、ブラウザのブックマークに貼り付けて保存します。
2. 任意のWebページ上でそのブックマークをクリックすると時計が表示されます。
3. もう一度クリックすると時計が非表示になります。