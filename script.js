document.addEventListener('DOMContentLoaded', () => {
    const orderList = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', () => {
            const foodItem = button.parentElement;
            const name = foodItem.getAttribute('data-name');
            const price = parseFloat(foodItem.getAttribute('data-price'));

            // Add item to order summary
            const listItem = document.createElement('li');
            listItem.textContent = `${name} - $${price}`;
            orderList.appendChild(listItem);

            // Update total price
            totalPrice += price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        alert(`Your total is $${totalPrice.toFixed(2)}. Thank you for your order!`);
        orderList.innerHTML = '';
        totalPrice = 0;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    });
});
