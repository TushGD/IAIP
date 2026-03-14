 const radios = document.querySelectorAll('input[type="radio"]');
  const badge = document.getElementById('inputUnitBadge');
  const symbols = { celsius: '°C', fahrenheit: '°F', kelvin: 'K' };

  radios.forEach(r => r.addEventListener('change', () => {
    badge.textContent = symbols[r.value];
  }));

  function convert() {
    const input = document.getElementById('tempInput');
    const errorMsg = document.getElementById('errorMsg');
    const val = parseFloat(input.value);

    if (input.value.trim() === '' || isNaN(val)) {
      input.classList.add('invalid');
      errorMsg.classList.add('show');
      return;
    }

    input.classList.remove('invalid');
    errorMsg.classList.remove('show');

    const fromUnit = document.querySelector('input[name="unit"]:checked').value;
    let results = {};

    if (fromUnit === 'celsius') {
      results = {
        fahrenheit: (val * 9/5) + 32,
        kelvin: val + 273.15
      };
    } else if (fromUnit === 'fahrenheit') {
      results = {
        celsius: (val - 32) * 5/9,
        kelvin: (val - 32) * 5/9 + 273.15
      };
    } else {
      results = {
        celsius: val - 273.15,
        fahrenheit: (val - 273.15) * 9/5 + 32
      };
    }

    const toUnits = Object.keys(results);
    const formatted = toUnits.map(u => `${parseFloat(results[u].toFixed(2))} ${symbols[u]}`).join('   ·   ');
    const toLabel = toUnits.map(u => u.charAt(0).toUpperCase() + u.slice(1)).join(' & ');

    const resultValue = document.getElementById('resultValue');
    const resultUnit = document.getElementById('resultUnit');
    const resultArea = document.getElementById('resultArea');
    const placeholder = document.getElementById('placeholder');
    const resultContent = document.getElementById('resultContent');

    resultValue.classList.remove('animate');
    void resultValue.offsetWidth;

    placeholder.style.display = 'none';
    resultContent.style.display = 'block';
    resultArea.classList.add('has-result');

    const vals = toUnits.map(u => `${parseFloat(results[u].toFixed(2))}${symbols[u]}`);
    resultValue.textContent = vals[0];
    resultUnit.textContent = `Also: ${vals[1]}`;
    resultValue.classList.add('animate');
  }

  document.getElementById('tempInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') convert();
  });