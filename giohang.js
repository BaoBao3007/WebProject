function calculateTotal() {
    var quantity1 = parseInt(document.getElementById('quantity1').value);
    var price1 = parseFloat(document.getElementById('price1').innerHTML);
    var total1 = quantity1 * price1;
    document.getElementById('total1').innerHTML = total1.toLocaleString(0.000)

    var quantity2 = parseInt(document.getElementById('quantity2').value);
    var price2 = parseFloat(document.getElementById('price2').innerHTML);
    var total2 = quantity2 * price2;
    document.getElementById('total2').innerHTML = total2.toLocaleString(0.000)

    var quantity3 = parseInt(document.getElementById('quantity3').value);
    var price3 = parseFloat(document.getElementById('price3').innerHTML);
    var total3 = quantity3 * price3;
    document.getElementById('total3').innerHTML = total3.toLocaleString(0.000)

    var quantity4 = parseInt(document.getElementById('quantity4').value);
    var price4 = parseFloat(document.getElementById('price4').innerHTML);
    var total4 = quantity4 * price4;
    document.getElementById('total4').innerHTML = total4.toLocaleString(0.000)

    var quantity5 = parseInt(document.getElementById('quantity5').value);
    var price5 = parseFloat(document.getElementById('price5').innerHTML);
    var total5 = quantity5 * price5;
    document.getElementById('total5').innerHTML = total5.toLocaleString(0.000)

    var quantity6 = parseInt(document.getElementById('quantity6').value);
    var price6 = parseFloat(document.getElementById('price6').innerHTML);
    var total6 = quantity6 * price6;
    document.getElementById('total6').innerHTML = total6.toLocaleString(0.000)

    var quantity7 = parseInt(document.getElementById('quantity7').value);
    var price7 = parseFloat(document.getElementById('price7').innerHTML);
    var total7 = quantity7 * price7;
    document.getElementById('total7').innerHTML = total7.toLocaleString(0.000)

    var quantity8 = parseInt(document.getElementById('quantity8').value);
    var price8 = parseFloat(document.getElementById('price8').innerHTML);
    var total8 = quantity8 * price8;
    document.getElementById('total8').innerHTML = total8.toLocaleString(0.000)

    var quantity9 = parseInt(document.getElementById('quantity9').value);
    var price9 = parseFloat(document.getElementById('price9').innerHTML);
    var total9 = quantity9 * price9;
    document.getElementById('total9').innerHTML = total9.toLocaleString(0.000)

    var grandTotal = total1 + total2 + total3+total4+total5+total6+total7+total8+total9;
    document.getElementById('grandTotal').innerHTML = grandTotal.toLocaleString(0.000)
}

function increaseQuantity(inputId) {
    var input = document.getElementById(inputId);
    var quantity = parseInt(input.value);
    input.value = quantity + 1;
    calculateTotal();
}

function decreaseQuantity(inputId) {
    var input = document.getElementById(inputId);
    var quantity = parseInt(input.value);
    if (quantity > 0) {
        input.value = quantity - 1;
        calculateTotal();
    }
}
document.getElementById('price1').innerHTML = "2000";
document.getElementById('price2').innerHTML = "10000";
document.getElementById('price3').innerHTML = "29000";
document.getElementById('price4').innerHTML = "227000";
document.getElementById('price5').innerHTML = "12000";
document.getElementById('price6').innerHTML = "25000";
document.getElementById('price7').innerHTML = "1000";
document.getElementById('price8').innerHTML = "45000";
document.getElementById('price9').innerHTML = "6000";