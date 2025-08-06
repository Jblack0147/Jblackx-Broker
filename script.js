function submitDeposit() {
  const amount = document.getElementById('depositAmount').value;
  document.getElementById('depositResult').innerText = `You’ve successfully deposited $${amount}.`;
}

function submitWithdraw() {
  const amount = document.getElementById('withdrawAmount').value;
  document.getElementById('withdrawResult').innerText = `You’ve requested a withdrawal of $${amount}. Processing...`;
}

function calculateROI() {
  const amount = parseFloat(document.getElementById('investAmount').value);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById('roiOutput').innerText = "Enter a valid amount.";
    return;
  }
  const roi = amount * 3;
  document.getElementById('roiOutput').innerText = `In one week, you will receive $${roi.toFixed(2)}! 🎉`;
}

// Simple Chart
if (document.getElementById('chart')) {
  const ctx = document.getElementById('chart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      datasets: [{
        label: 'Projected Growth ($)',
        data: [1000, 2000, 4000, 7000, 10000, 13000, 15000],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        tension: 0.3
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
