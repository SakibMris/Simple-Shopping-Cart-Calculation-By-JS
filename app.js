function updateCaseNumber(product, price, isIncreasing) {
    // taking id by writing product name string + number as id 
    const productInput = document.getElementById(product + '-number');
    let productQuantity = productInput.value;
    // checking plus and minus condition 
    if (isIncreasing) {
        productQuantity = parseInt(productQuantity) + 1;
    }
    else if (productQuantity > 0) {
        productQuantity = parseInt(productQuantity) - 1;
    }
    productInput.value = productQuantity;
    // update case price  
    const productPrice = document.getElementById(product + '-total');
    productPrice.innerText = productQuantity * price;
    // calculate subtotal 
    calculateTotal();
};

function productQuantity(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
// calculate total 
function calculateTotal() {
    const phoneTotal = productQuantity('phone') * 1219;
    const casetotal = productQuantity('case') * 59;
    const subtotal = phoneTotal + casetotal;
    const tax = subtotal / 10;
    const totalPrice = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
// case event handler
document.getElementById('case-plus-button').addEventListener('click', function () {
    updateCaseNumber('case', 59, true);
});
document.getElementById('case-minus-button').addEventListener('click', function () {
    updateCaseNumber('case', 59, false);
});
// phone event handler 
document.getElementById('phone-plus-button').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true);
});
document.getElementById('phone-minus-button').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false);
});