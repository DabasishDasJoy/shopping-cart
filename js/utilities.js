function getInputFieldValueById(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldValueString = field.value;
    return parseInt(fieldValueString);
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;

    return parseFloat(elementValueString);
}

function updateQuantity(elementId, isPlus) {
    const preQuantityElement = document.getElementById(elementId);
    const preQuantity = getInputFieldValueById(elementId);
    let newQuanty;
    if (isPlus) {
        newQuanty = preQuantity + 1;
    }
    else {

        newQuanty = preQuantity - 1;

    }

    preQuantityElement.value = newQuanty;

    return newQuanty;
}

function setTextValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function updateSubTotalTaxFinalPrice(){
    const subTotal = getElementValueById('phone-total-price') + getElementValueById('case-total-price');
    setTextValueById("sub-total", subTotal);
    
    const taxAmount = subTotal * 0.01;
    setTextValueById('tax', taxAmount.toFixed(2));

    const finalPrice = subTotal + taxAmount;
    setTextValueById('final-price', finalPrice);
}