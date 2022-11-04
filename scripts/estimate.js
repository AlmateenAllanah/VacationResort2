"use strict";
window.onload = init;

function init() {
    const submitbtn = document.getElementById("submit");
submitbtn.onclick= submitnonclick
}

function submitbtn() {
    console.log("calculate button was clicked");
let rate=150

if (document.getElementById("queenSize").checked){
    rate=210
}

let roomCost=Number(document.getElementById("numberOfDays").value)*rate;
document.getElementById("roomcast").innerHTML=Number(document.getElementById)

let discount = 0

if (document.getElementById)("military").checked{
discount= (Number(document.getElementById("nights").value)*rate)*.2;
}
else if (document.getElementById("aaaSenior").checked){
discount= (Number(document.getElementById("nights").value)*rate)*.2;
}
document.getElementById("discount").innerHTML=discount



let discountedPrice= (roomCost-discount)
(document.getElementById("dprice").innerHTML= discountedPrice)



let tax = (discountPrice*.12)
document.getElementById("tax").innerHTML= (tax).toFixed(2)



let total= tax + discountedPrice
document.getElementById("total").innerHTML=(total).toFixed(2)




}