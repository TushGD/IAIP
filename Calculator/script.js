let current = '0';
  let operator = null;
  let prevValue = null;
  let freshOp = false;
  let justCalc = false;

  const disp = document.getElementById('display');
  const exprEl = document.getElementById('expression');

  function updateDisplay() {
    disp.textContent = current;
    const l = current.length;
    disp.className = 'display-value' + (l > 12 ? ' xsmall' : l > 9 ? ' small' : '');
  }

  function ripple(btn, e) {
    const r = document.createElement('span');
    r.className = 'ripple';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e ? e.clientX - rect.left - size/2 : rect.width/2 - size/2;
    const y = e ? e.clientY - rect.top - size/2 : rect.height/2 - size/2;
    r.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
    btn.appendChild(r);
    setTimeout(() => r.remove(), 500);
  }

  function inputNum(n, btn, e) {
    ripple(btn, e);
    if (justCalc) { current = n; exprEl.textContent = ''; justCalc = false; }
    else current = (freshOp || current === '0') ? n : current + n;
    freshOp = false;
    updateDisplay();
  }

  function inputDot(btn, e) {
    ripple(btn, e);
    if (justCalc || freshOp) { current = '0.'; freshOp = false; justCalc = false; }
    else if (!current.includes('.')) current += '.';
    updateDisplay();
  }

  function inputOp(op, btn, e) {
    ripple(btn, e);
    justCalc = false;
    if (prevValue !== null && operator && !freshOp) {
      const res = compute(prevValue, parseFloat(current), operator);
      prevValue = typeof res === 'number' ? res : 0;
      current = fmt(res);
    } else {
      prevValue = parseFloat(current);
    }
    operator = op;
    freshOp = true;
    const sym = {'/':'÷','*':'×','-':'−','+':'+','%':'%'}[op];
    exprEl.textContent = `${fmt(prevValue)} ${sym}`;
    updateDisplay();
  }

  function compute(a, b, op) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return b === 0 ? 'Error' : a / b;
    if (op === '%') return a % b;
  }

  function fmt(v) {
    if (v === 'Error') return 'Error';
    return parseFloat(parseFloat(v).toFixed(10)).toString();
  }

  function calculate(btn, e) {
    ripple(btn, e);
    if (prevValue === null || !operator) return;
    const b = parseFloat(current);
    const sym = {'/':'÷','*':'×','-':'−','+':'+','%':'%'}[operator];
    exprEl.textContent = `${fmt(prevValue)} ${sym} ${b} =`;
    const res = compute(prevValue, b, operator);
    current = fmt(res);
    prevValue = null; operator = null; freshOp = false; justCalc = true;
    updateDisplay();
  }

  function clearAll(btn, e) {
    ripple(btn, e);
    current = '0'; operator = null; prevValue = null;
    freshOp = false; justCalc = false; exprEl.textContent = '';
    updateDisplay();
  }

  function deleteLast(btn, e) {
    ripple(btn, e);
    if (justCalc || freshOp) return;
    current = current.length > 1 ? current.slice(0, -1) : '0';
    updateDisplay();
  }

  document.addEventListener('keydown', ev => {
    if (ev.key >= '0' && ev.key <= '9') inputNum(ev.key, disp);
    else if (ev.key === '.') inputDot(disp);
    else if (ev.key === '+') inputOp('+', disp);
    else if (ev.key === '-') inputOp('-', disp);
    else if (ev.key === '*') inputOp('*', disp);
    else if (ev.key === '/') { ev.preventDefault(); inputOp('/', disp); }
    else if (ev.key === '%') inputOp('%', disp);
    else if (ev.key === 'Enter' || ev.key === '=') calculate(disp);
    else if (ev.key === 'Backspace') deleteLast(disp);
    else if (ev.key === 'Escape') clearAll(disp);
  });