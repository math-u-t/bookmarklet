javascript:(() => {
  function parseNumber(text) {
    text = text.trim();
    if (text.endsWith('億')) return parseFloat(text) * 1e8;
    if (text.endsWith('万')) return parseFloat(text) * 1e4;
    return parseFloat(text.replace(/,/g, ''));
  }

  let total = 0;
  const elements = document.querySelectorAll(
    'a[href*="/analytics"] .css-1jxf684:not(:has(.css-1jxf684))'
  );

  elements.forEach(el => {
    el.style.outline = '2px solid red';
    console.log(el);
    const value = parseNumber(el.textContent);
    if (!isNaN(value)) total += value;
  });

  alert('合計閲覧数: ' + total.toLocaleString());
})();