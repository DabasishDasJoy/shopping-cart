document.getElementById('btn-case-plus').addEventListener('click', function () {
    const quantity = updateQuantity('case-quantity', true);
    const totalPrice = quantity * 59;
    setTextValueById('case-total-price', totalPrice);

    updateSubTotalTaxFinalPrice();
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const quantity = updateQuantity('case-quantity', false);
    const totalPrice = quantity * 59;
    setTextValueById('case-total-price', totalPrice);

    updateSubTotalTaxFinalPrice();
});