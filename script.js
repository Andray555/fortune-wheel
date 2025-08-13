document.getElementById('spinBtn').addEventListener('click', () => {
    document.getElementById('qrModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('qrModal').style.display = 'none';
});

// Проверка платежа (заглушка)
async function checkPayment() {
    const response = await fetch('http://127.0.0.1:5000/check-payment');
    const data = await response.json();
    if (data.total >= 500) {
        spinWheel();
    } else {
        alert('Платеж не подтвержден!');
    }
}

function spinWheel() {
    const wheel = document.getElementById('wheel');
    wheel.style.transform = 'rotate(1800deg)';
}
