javascript: (function() {
  var div = document.getElementById('inputDiv');
  if (!div) {
    div = document.createElement('div');
    div.id = 'inputDiv';
    div.style.position = 'fixed';
    div.style.top = '50px';
    div.style.left = '50px';
    div.style.padding = '20px';
    div.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    div.style.borderRadius = '10px';
    div.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    div.style.zIndex = '9999';
    var titleBar = document.createElement('div');
    titleBar.style.cursor = 'move';
    titleBar.style.backgroundColor = '#e0e0e0';
    titleBar.style.padding = '5px';
    titleBar.style.borderRadius = '5px';
    titleBar.style.marginBottom = '10px';
    titleBar.style.color = '#777';
    titleBar.innerHTML = 'ドラッグして移動';
    var fileNameInput = document.createElement('input');
    fileNameInput.type = 'text';
    fileNameInput.placeholder = 'ファイル名を入力';
    fileNameInput.style.padding = '5px';
    fileNameInput.style.border = '1px solid #ccc';
    fileNameInput.style.borderRadius = '5px';
    fileNameInput.value = localStorage.getItem('fileName') || '';
    fileNameInput.addEventListener('input', function() {
      localStorage.setItem('fileName', fileNameInput.value);
    });
    var inputBox = document.createElement('textarea');
    inputBox.style.fontSize = '15px';
    inputBox.style.width = '525px';
    inputBox.style.height = '210px';
    inputBox.style.padding = '5px';
    inputBox.style.border = '1px solid #ccc';
    inputBox.style.borderRadius = '5px';
    inputBox.style.resize = 'both';
    inputBox.style.marginTop = '10px';
    inputBox.value = localStorage.getItem('sharedText') || '';
    inputBox.setAttribute('wrap', 'soft');
    inputBox.style.whiteSpace = 'pre-wrap';
    inputBox.style.wordWrap = 'break-word';
    var replaceEnabled = false;

    function transformText(text) {
      if (replaceEnabled) {
        return text.replace(/\\Alpha/g, 'Α').replace(/\\alpha/g, 'α').replace(/\\Beta/g, 'Β').replace(/\\beta/g, 'β').replace(/\\Gamma/g, 'Γ').replace(/\\gamma/g, 'γ').replace(/\\Delta/g, 'Δ').replace(/\\delta/g, 'δ').replace(/\\Epsilon/g, 'Ε').replace(/\\epsilon/g, 'ε').replace(/\\Zeta/g, 'Ζ').replace(/\\zeta/g, 'ζ').replace(/\\Eta/g, 'Η').replace(/\\eta/g, 'η').replace(/\\Theta/g, 'Θ').replace(/\\theta/g, 'θ').replace(/\\Iota/g, 'Ι').replace(/\\iota/g, 'ι').replace(/\\Kappa/g, 'Κ').replace(/\\kappa/g, 'κ').replace(/\\Lambda/g, 'Λ').replace(/\\lambda/g, 'λ').replace(/\\Mu/g, 'Μ').replace(/\\mu/g, 'μ').replace(/\\Nu/g, 'Ν').replace(/\\nu/g, 'ν').replace(/\\Xi/g, 'Ξ').replace(/\\xi/g, 'ξ').replace(/\\Omicron/g, 'Ο').replace(/\\omicron/g, 'ο').replace(/\\Pi/g, 'Π').replace(/\\pi/g, 'π').replace(/\\Rho/g, 'Ρ').replace(/\\rho/g, 'ρ').replace(/\\Sigma/g, 'Σ').replace(/\\sigma/g, 'σ').replace(/\\Tau/g, 'Τ').replace(/\\tau/g, 'τ').replace(/\\Upsilon/g, 'Υ').replace(/\\upsilon/g, 'υ').replace(/\\Phi/g, 'Φ').replace(/\\phi/g, 'φ').replace(/\\Chi/g, 'Χ').replace(/\\chi/g, 'χ').replace(/\\Psi/g, 'Ψ').replace(/\\psi/g, 'ψ').replace(/\\Omega/g, 'Ω').replace(/\\omega/g, 'ω').replace(/\\zh/g, '←').replace(/\\zj/g, '↓').replace(/\\zk/g, '↑').replace(/\\zl/g, '→').replace(/\\Int/g, '∫').replace(/\\Ciin/g, '∮').replace(/\\Infty/g, '∞').replace(/\\And/g, '∧').replace(/\\Or/g, '∨').replace(/\\Inset/g, '∈').replace(/\\Noset/g, '∉').replace(/\\>=/g, '≧').replace(/\\<=/g, '≦').replace(/\\~=/g, '≒').replace(/\\!=/g, '≠').replace(/\\All/g, '∀').replace(/\\SetA/g, '𝔸').replace(/\\SetB/g, '𝔹').replace(/\\SetC/g, 'ℂ').replace(/\\SetD/g, '𝔻').replace(/\\SetE/g, '𝔼').replace(/\\SetF/g, '𝔽').replace(/\\SetG/g, '𝔾').replace(/\\SetH/g, 'ℍ').replace(/\\SetI/g, '𝕀').replace(/\\SetJ/g, '𝕁').replace(/\\SetK/g, '𝕂').replace(/\\SetL/g, '𝕃').replace(/\\SetM/g, '𝕄').replace(/\\SetN/g, 'ℕ').replace(/\\SetO/g, '𝕆').replace(/\\SetP/g, 'ℙ').replace(/\\SetQ/g, 'ℚ').replace(/\\SetR/g, 'ℝ').replace(/\\SetS/g, '𝕊').replace(/\\SetT/g, '𝕋').replace(/\\SetU/g, '𝕌').replace(/\\SetV/g, '𝕍').replace(/\\SetW/g, '𝕎').replace(/\\SetX/g, '𝕏').replace(/\\SetY/g, '𝕐').replace(/\\SetZ/g, 'ℤ').replace(/\\!A/g, '𝒜').replace(/\\!B/g, 'ℬ').replace(/\\!C/g, '𝒞').replace(/\\!D/g, '𝒟').replace(/\\!E/g, 'ℰ').replace(/\\!F/g, 'ℱ').replace(/\\!G/g, '𝒢').replace(/\\!iH/g, 'ℋ').replace(/\\!I/g, 'ℐ').replace(/\\!J/g, '𝒥').replace(/\\!K/g, '𝒦').replace(/\\!L/g, 'ℒ').replace(/\\!iM/g, 'ℳ').replace(/\\!N/g, '𝒩').replace(/\\!O/g, '𝒪').replace(/\\!P/g, '𝒫').replace(/\\!Q/g, '𝒬').replace(/\\!R/g, 'ℛ').replace(/\\!S/g, '𝒮').replace(/\\!T/g, '𝒯').replace(/\\!U/g, '𝒰').replace(/\\!V/g, '𝒱').replace(/\\!W/g, '𝒲').replace(/\\!X/g, '𝒳').replace(/\\!Y/g, '𝒴').replace(/\\!Z/g, '𝒵').replace(/\\!a/g, '𝒶').replace(/\\!b/g, '𝒷').replace(/\\!c/g, '𝒸').replace(/\\!d/g, '𝒹').replace(/\\!e/g, '𝑒').replace(/\\!f/g, '𝒻').replace(/\\!g/g, '𝑔').replace(/\\!ih/g, '𝒽').replace(/\\!i/g, '𝒾').replace(/\\!j/g, '𝒿').replace(/\\!k/g, '𝓀').replace(/\\!l/g, '𝓁').replace(/\\!im/g, '𝓂').replace(/\\!n/g, '𝓃').replace(/\\!o/g, '𝑜').replace(/\\!p/g, '𝓅').replace(/\\!q/g, '𝓆').replace(/\\!r/g, '𝓇').replace(/\\!s/g, '𝓈').replace(/\\!t/g, '𝓉').replace(/\\!u/g, '𝓊').replace(/\\!v/g, '𝓋').replace(/\\!w/g, '𝓌').replace(/\\!x/g, '𝓍').replace(/\\!y/g, '𝓎').replace(/\\!z/g, '𝓏').replace(/\\Because/g, '∵').replace(/\\Therefore/g, '∴').replace(/\\Nabla/g, '∇').replace(/\\Partial/g, '∂').replace(/\\'0/g, '⁰').replace(/\\'1/g, '¹').replace(/\\'2/g, '²').replace(/\\'3/g, '³').replace(/\\'4/g, '⁴').replace(/\\5/g, '⁵').replace(/\\'6/g, '⁶').replace(/\\'7/g, '⁷').replace(/\\'8/g, '⁸').replace(/\\'9/g, '⁹').replace(/\\'P/g, '⁺').replace(/\\'M/g, '‐').replace(/\\,0/g, '₀').replace(/\\,1/g, '₁').replace(/\\,2/g, '₂').replace(/\\,3/g, '₃').replace(/\\,4/g, '₄').replace(/\\,5/g, '₅').replace(/\\,6/g, '₆').replace(/\\,7/g, '₇').replace(/\\,8/g, '₈').replace(/\\,9/g, '₉').replace(/\\,P/g, '₊').replace(/\\,M/g, '₋').replace(/\\Μul/g, '×').replace(/\\Div/g, '÷').replace(/\\PM/g, '±').replace(/\\MP/g, '∓').replace(/\\Star/g, '☆').replace(/\\->/g, '↦').replace(/\\Section/g, '§').replace(/\\Sqrt/g, '√').replace(/\\Curt/g, '∛').replace(/\\Boip/g, '゙').replace(/\\Cerp/g, '゚');
      }
      return text;
    }
    inputBox.addEventListener('input', function() {
      inputBox.value = transformText(inputBox.value);
      localStorage.setItem('sharedText', inputBox.value);
    });
    var replaceToggleButton = document.createElement('button');
    replaceToggleButton.innerHTML = '置き換えオフ';
    replaceToggleButton.style.padding = '5px 10px';
    replaceToggleButton.style.border = '1px solid #ccc';
    replaceToggleButton.style.borderRadius = '5px';
    replaceToggleButton.addEventListener('click', function() {
      replaceEnabled = !replaceEnabled;
      replaceToggleButton.innerHTML = replaceEnabled ? '置き換えオン' : '置き換えオフ';
    });
    var wrapButton = document.createElement('button');
    wrapButton.innerHTML = '折り返し';
    wrapButton.style.padding = '5px 10px';
    wrapButton.style.border = '1px solid #ccc';
    wrapButton.style.borderRadius = '5px';
    wrapButton.addEventListener('click', function() {
      var isWrapping = inputBox.getAttribute('wrap') === 'soft';
      inputBox.setAttribute('wrap', isWrapping ? 'off' : 'soft');
      inputBox.style.whiteSpace = isWrapping ? 'normal' : 'pre-wrap';
      inputBox.style.wordWrap = isWrapping ? 'normal' : 'break-word';
    });
    var dropdown = document.createElement('div');
    dropdown.style.position = 'relative';
    dropdown.style.display = 'inline-block';
    var dropdownButton = document.createElement('button');
    dropdownButton.innerHTML = 'ファイル操作';
    dropdownButton.style.padding = '5px 10px';
    dropdownButton.style.border = '1px solid #ccc';
    dropdownButton.style.borderRadius = '5px';
    dropdownButton.addEventListener('click', function() {
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
    var dropdownMenu = document.createElement('div');
    dropdownMenu.style.display = 'none';
    dropdownMenu.style.position = 'absolute';
    dropdownMenu.style.top = '100%';
    dropdownMenu.style.left = '0';
    dropdownMenu.style.backgroundColor = '#fff';
    dropdownMenu.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    dropdownMenu.style.minWidth = '160px';
    dropdownMenu.style.zIndex = '999';
    dropdownMenu.style.border = '1px solid #ccc';
    var loadButton = document.createElement('button');
    loadButton.innerHTML = '読み込み';
    loadButton.style.padding = '5px 10px';
    loadButton.style.border = '1px solid #ccc';
    loadButton.style.borderRadius = '5px';
    loadButton.style.width = '100%';
    loadButton.addEventListener('click', function() {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = '.txt';
      input.onchange = function(e) {
        var reader = new FileReader();
        reader.onload = function(event) {
          inputBox.value = event.target.result;
        };
        reader.readAsText(e.target.files[0]);
      };
      input.click();
    });
    var saveButton = document.createElement('button');
    saveButton.innerHTML = '書き出し';
    saveButton.style.padding = '5px 10px';
    saveButton.style.border = '1px solid #ccc';
    saveButton.style.borderRadius = '5px';
    saveButton.style.width = '100%';
    saveButton.addEventListener('click', function() {
      var fileName = localStorage.getItem('fileName') || 'Text';
      if (!fileName.includes('.')) {
        fileName += '.txt';
      }
      var blob = new Blob([inputBox.value], {
        type: 'text/plain'
      });
      var link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    });
    dropdownMenu.appendChild(loadButton);
    dropdownMenu.appendChild(saveButton);
    dropdown.appendChild(dropdownButton);
    dropdown.appendChild(dropdownMenu);
    var buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.alignItems = 'center';
    buttonContainer.style.marginTop = '10px';
    buttonContainer.style.gap = '10px';
    buttonContainer.appendChild(replaceToggleButton);
    buttonContainer.appendChild(fileNameInput);
    buttonContainer.appendChild(dropdown);
    buttonContainer.appendChild(wrapButton);
    div.appendChild(titleBar);
    div.appendChild(buttonContainer);
    div.appendChild(inputBox);
    document.body.appendChild(div);
    var isDragging = false,
      offsetX, offsetY;
    titleBar.addEventListener('mousedown', function(e) {
      isDragging = true;
      var rect = div.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
    });
    document.addEventListener('mousemove', function(e) {
      if (isDragging) {
        e.preventDefault();
        div.style.left = (e.clientX - offsetX) + 'px';
        div.style.top = (e.clientY - offsetY) + 'px';
      }
    });
    document.addEventListener('mouseup', function() {
      isDragging = false;
    });
  } else {
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
  }
})();