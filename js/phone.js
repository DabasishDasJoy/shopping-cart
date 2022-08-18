document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const quantity = updateQuantity('phone-quantity', true);
    const totalPrice = quantity * 1219;
    setTextValueById('phone-total-price', totalPrice);

    updateSubTotalTaxFinalPrice();
});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const quantity = updateQuantity('phone-quantity', false);
    const totalPrice = quantity * 1219;
    setTextValueById('phone-total-price', totalPrice);

    updateSubTotalTaxFinalPrice();
});