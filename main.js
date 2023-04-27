// definisco le variabili
let distanza,userEta,bigliettoPrezzo,discountOver,discountYoung,priceOver,priceYoung;
const prezzoPerKilometro= 0.21;

// chiedo la distanza
distanza = prompt ("Quanti km dista la tua destinazione?");

// chiedo l'età
userEta = prompt ("Quanti anni hai?");

// prezzo per kilometri
bigliettoPrezzo = distanza * prezzoPerKilometro;

// calcolo sconto over65
discountOver = (bigliettoPrezzo / 100) * 40;

// calcolo sconto minorenni
discountYoung = (bigliettoPrezzo / 100) * 20;

// costo per over65
priceOver = (bigliettoPrezzo - discountOver);

// costo per minorenni65
priceYoung = (bigliettoPrezzo - discountYoung);




// condizione over65
if (userEta > 65) { 
    document.getElementById("prezzo").innerHTML ="il prezzo del biglietto sarà: "+ priceOver.toFixed(2)  +"€";
       
}
// condizione minorenne
else if (userEta < 18) {
    document.getElementById("prezzo").innerHTML ="il prezzo del biglietto sarà: " + priceYoung.toFixed(2)  +"€";

}
else {
    document.getElementById("prezzo").innerHTML ="il prezzo del biglietto sarà: " + bigliettoPrezzo.toFixed(2)  +"€";
  }


