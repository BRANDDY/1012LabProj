/* Webpage HTML document for Lab 4.
   For: EECS 1012s, York University, Lassonde School of Engineering */
// for Ex2 to Ex6, change the name of the following function properly

function mouseOver() {
    document.getElementById("butn").style.color = "Red";
}

function mouseOut() {
    document.getElementById("butn").style.color = "DarkSlateGrey";
}

function perimeter() {

    //precondition: w, h belongs to real numbers
    //postcondition: perimeter is calculated and outputted

    var w = parseInt(document.getElementById("number1").value);
    var h = parseInt(document.getElementById("number2").value);

    /* in Ex2 to Ex6, you need to replace the following line 
        with some other formulas */
    var p = 2 * (w + h);
    document.getElementById("output").innerHTML = "perimeter: " + p;

}