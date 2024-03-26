document.getElementById('plusButton').addEventListener('click', function() {
    let months = parseInt(document.getElementById('installmentMonths').innerText);
    const sum = parseFloat(document.getElementById('installmentSumInput').value);
    const availableMonths = [3, 6, 9, 12, 24, 48];
    let nextIndex = availableMonths.indexOf(months) + 1;
    if (nextIndex >= availableMonths.length) nextIndex = availableMonths.length - 1;
    months = availableMonths[nextIndex];
    document.getElementById('installmentMonths').innerText = months;
    document.getElementById('monthly-payment').innerText = (sum / months).toFixed(2);
  });
  
  document.getElementById('minusButton').addEventListener('click', function() {
    let months = parseInt(document.getElementById('installmentMonths').innerText);
    const sum = parseFloat(document.getElementById('installmentSumInput').value);
    const availableMonths = [3, 6, 9, 12, 24, 48];
    let prevIndex = availableMonths.indexOf(months) - 1;
    if (prevIndex < 0) prevIndex = 0;
    months = availableMonths[prevIndex];
    document.getElementById('installmentMonths').innerText = months;
    document.getElementById('monthly-payment').innerText = (sum / months).toFixed(2);
  });
