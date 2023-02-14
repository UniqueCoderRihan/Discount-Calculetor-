document.getElementById('btnApply1').addEventListener('click', function(){
    const priceElement = document.getElementById('inputAmountFiled');
    const priceFormInputString = priceElement.value;
    const priceFromUser = parseFloat(priceFormInputString);
    priceElement.value = '';
    const parsentiesElement = document.getElementById('inputDiscountFiled');
    const parsentiesInputString = parsentiesElement.value;
    const parsentiesFromUser = parseFloat(parsentiesInputString);
    parsentiesElement.value = '';
    // calculetion
    const discount = priceFromUser /100* parsentiesFromUser;
    discount.toFixed(2);
    const totalDiscountElement = document.getElementById('total-discount');
    totalDiscountElement.innerText = discount;
    // new Price Without disCount
    const newPriceElement = document.getElementById('new-price');
    const newPrice = priceFromUser-discount;
    newPriceElement.innerText = newPrice;
})