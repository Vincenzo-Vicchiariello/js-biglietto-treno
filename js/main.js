function priceCalc() {
    let km = prompt("Inserire i km da percorrere", "123");
    let age = prompt("Inserire la propria età", "99");


    let prePrice = 0.21 * km;
    let n = prePrice.toFixed(2);



    parseInt(prePrice);

    let yDiscountPrice = prePrice * 0.8;
    let oDiscountPrice = prePrice * 0.6;
    let n2 = yDiscountPrice.toFixed(2);
    let n3 = oDiscountPrice.toFixed(2);

    console.log(prePrice);
    console.log(yDiscountPrice);
    console.log(oDiscountPrice);


    if (age < 18) {
        document.getElementById("finalPrice").innerHTML =
            "Si applica lo sconto giovani! Il prezzo finale è di " + n2 + "€."
    }
    else if (age > 60) {
        document.getElementById("finalPrice").innerHTML =
            "Si applica lo sconto anziani! Il prezzo finale è di " + n3 + "€."
    }
    else {
        document.getElementById("finalPrice").innerHTML =
            "Non si applica nessuno sconto, il prezzo finale è di " + n + "€."
    }




    if (age < 18) {
        console.log("il prezzo del biglietto è" + yDiscountPrice);
    }
    else if (age > 60) {
        console.log("il prezzo del biglietto è" + oDiscountPrice);
    }
    else {
        console.log("il prezzo del biglietto è" + prePrice);
    }






}




