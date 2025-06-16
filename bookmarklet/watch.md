# 時計 #

## 説明 ##

このBookmarkletをブラウザで実行すると、画面左上に現在の日時（秒まで）を表示する時計が表示されます。時計はドラッグして自由に移動できます。もう一度実行すると非表示になります。

## 機能一覧 ##

* 現在時刻を「YYYY年 MM月 DD日 (曜日) HH\:MM\:SS」の形式で表示
* 時計は画面上でドラッグして移動可能
* 秒単位で毎秒更新
* 二度目の実行で表示・非表示をトグル
* モバイル対応（`touchstart`, `touchmove` によるドラッグ）

## Bookmarkletコード ##

```javascript
javascript:(function(){var e=document.getElementById('current-time');if(e){e.style.display=(e.style.display=='none'?'block':'none');}else{var d=document.createElement('div');d.id='current-time';d.style.position='fixed';d.style.top='10px';d.style.left='10px';d.style.padding='5px';d.style.backgroundColor='rgba(0, 0, 0, 0.35)';d.style.color='white';d.style.fontSize='20px';d.style.width='250px';d.style.textAlign='center';d.style.borderRadius='5px';d.style.zIndex='999999';d.style.wordWrap='break-word';document.body.appendChild(d);var updateTime=function(){var now=new Date(),year=now.getFullYear(),month=now.getMonth()+1,date=now.getDate(),day=now.toLocaleString('ja-JP',{weekday:'short'}),hours=now.getHours(),minutes=now.getMinutes(),seconds=now.getSeconds();hours=hours<10?'0'+hours:hours;minutes=minutes<10?'0'+minutes:minutes;seconds=seconds<10?'0'+seconds:seconds;d.innerText=year+'年 '+month+'月 '+date+'日 ('+day+') '+hours+':'+minutes+':'+seconds;};updateTime();setInterval(updateTime,1000);var isDragging=false,offsetX,offsetY,lastX,lastY;function startDrag(e){e.preventDefault();isDragging=true;offsetX=(e.clientX||e.touches[0].clientX)-d.getBoundingClientRect().left;offsetY=(e.clientY||e.touches[0].clientY)-d.getBoundingClientRect().top;lastX=e.clientX||e.touches[0].clientX;lastY=e.clientY||e.touches[0].clientY;document.body.style.overflow='hidden';document.addEventListener('mousemove',dragMove);document.addEventListener('mouseup',stopDrag);document.addEventListener('touchmove',dragMove);document.addEventListener('touchend',stopDrag);}function dragMove(e){if(isDragging){var x=e.clientX||e.touches[0].clientX,y=e.clientY||e.touches[0].clientY,deltaX=x-lastX,deltaY=y-lastY;requestAnimationFrame(function(){d.style.left=(parseFloat(d.style.left||0)+deltaX)+'px';d.style.top=(parseFloat(d.style.top||0)+deltaY)+'px';});lastX=x;lastY=y;}}function stopDrag(){isDragging=false;document.body.style.overflow='';document.removeEventListener('mousemove',dragMove);document.removeEventListener('mouseup',stopDrag);document.removeEventListener('touchmove',dragMove);document.removeEventListener('touchend',stopDrag);}d.addEventListener('mousedown',startDrag);d.addEventListener('touchstart',startDrag);}})();
```

## 使い方 ##

1. 上記コード全体を1行にまとめて、ブラウザのブックマークに貼り付けて保存します。
2. 任意のWebページ上でそのブックマークをクリックすると時計が表示されます。
3. もう一度クリックすると時計が非表示になります。