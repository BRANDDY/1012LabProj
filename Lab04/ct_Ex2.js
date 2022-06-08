/* Webpage HTML document for Lab 4.
   For: EECS 1012s, York University, Lassonde School of Engineering */
// for Ex2 to Ex6, change the name of the following function properly

function mouseOver() {
    document.getElementById("butn").style.color = "Red";
}

function mouseOut() {
    document.getElementById("butn").style.color = "DarkSlateGrey";
}

//pre: a,b,c are rational numbers
//post:  volumn is calculated and outputted

function volumn() {
    var a = parseInt(document.getElementById("number1").value);
    var b = parseInt(document.getElementById("number2").value);
    var c = parseInt(document.getElementById("number3").value);

    var x = 4 / 3 * Math.PI * a * b * c;
    x = x.toFixed(2);
    document.getElementById("output").innerHTML = "volume: " + x;

}