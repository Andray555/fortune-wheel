const stripe = Stripe("pk_test_ваш_ключ");

document.getElementById("payButton").addEventListener("click", async () => {
    const response = await fetch("/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 500 }),  // Сумма из конфига
    });
    const { clientSecret } = await response.json();
    const { error } = await stripe.confirmPayment({ clientSecret });
    if (error) alert("Ошибка оплаты!");
    else spinWheel();  // Запуск анимации после оплаты
});
