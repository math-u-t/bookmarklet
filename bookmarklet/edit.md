# [ページ編集](bookmarklet/source/edit.js) #

## 説明 ##

ページのテキストを直接編集できるようにします。学習や説明資料作成に便利です。

また、ctrl+shift+iで開かなくてもokです。

### Bookmarkletコード ###

```javascript
javascript:void(document.designMode = (document.designMode == 'off' ? 'on' : 'off'));
```