javascript: (function(c, d) {
  var o = d.getElementById('my-overlay');
  if (o) {
    o.style.display = o.style.display === 'none' ? 'block' : 'none';
  } else {
    o = d.createElement('div');
    o.id = 'my-overlay';
    o.style.position = 'fixed';
    o.style.top = 0;
    o.style.left = 0;
    o.style.width = '100vw';
    o.style.height = '100vh';
    o.style.backgroundColor = c;
    o.style.cursor = 'pointer';
    o.style.pointerEvents = 'none';
    d.body.appendChild(o);
  }
  setInterval(function() {
    o.style.zIndex = 99999;
  }, 1000);
})('rgba(0,0,0,0.7)', document);