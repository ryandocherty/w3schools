//Mixed Variables Example:
const price1 = 69;
const price2 = 420;
let total = price1 + price2;

function printTotal_Function(){
    document.getElementById("myPrice1").innerHTML = "Price 1: £" + price1;
    document.getElementById("myPrice2").innerHTML = "Price 2: £" + price2;
    document.getElementById("myTotal").innerHTML = "Total: £" + total;
}