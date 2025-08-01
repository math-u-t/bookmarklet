javascript:(function () {
  var e = document.getElementById('current-time');

  if (e) {
    // 既に表示されている場合はトグルで非表示にする
    e.style.display = (e.style.display === 'none' ? 'block' : 'none');
  } else {
    // 要素がなければ作成して表示
    var d = document.createElement('div');
    d.id = 'current-time';
    d.style.position = 'fixed';
    d.style.top = '10px';
    d.style.left = '10px';
    d.style.padding = '5px';
    d.style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
    d.style.color = 'white';
    d.style.fontSize = '20px';
    d.style.width = '250px';
    d.style.textAlign = 'center';
    d.style.borderRadius = '5px';
    d.style.zIndex = '999999';
    d.style.wordWrap = 'break-word';
    document.body.appendChild(d);

    // 時刻更新処理
    var updateTime = function () {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var date = now.getDate();
      var day = now.toLocaleString('ja-JP', { weekday: 'short' });
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();

      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      d.innerText = year + '年 ' + month + '月 ' + date + '日 (' + day + ') ' + hours + ':' + minutes + ':' + seconds;
    };

    updateTime();
    setInterval(updateTime, 1000);

    // ドラッグ操作
    var isDragging = false, offsetX, offsetY, lastX, lastY;

    function startDrag(e) {
      e.preventDefault();
      isDragging = true;
      offsetX = (e.clientX || e.touches[0].clientX) - d.getBoundingClientRect().left;
      offsetY = (e.clientY || e.touches[0].clientY) - d.getBoundingClientRect().top;
      lastX = e.clientX || e.touches[0].clientX;
      lastY = e.clientY || e.touches[0].clientY;

      document.body.style.overflow = 'hidden';
      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', stopDrag);
      document.addEventListener('touchmove', dragMove);
      document.addEventListener('touchend', stopDrag);
    }

    function dragMove(e) {
      if (isDragging) {
        var x = e.clientX || e.touches[0].clientX;
        var y = e.clientY || e.touches[0].clientY;
        var deltaX = x - lastX;
        var deltaY = y - lastY;

        requestAnimationFrame(function () {
          d.style.left = (parseFloat(d.style.left || 0) + deltaX) + 'px';
          d.style.top = (parseFloat(d.style.top || 0) + deltaY) + 'px';
        });

        lastX = x;
        lastY = y;
      }
    }

    function stopDrag() {
      isDragging = false;
      document.body.style.overflow = '';
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchmove', dragMove);
      document.removeEventListener('touchend', stopDrag);
    }

    d.addEventListener('mousedown', startDrag);
    d.addEventListener('touchstart', startDrag);
  }
})();