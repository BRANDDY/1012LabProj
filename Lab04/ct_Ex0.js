function mouseOver() {
    document.getElementById("butn").style.color = "Red";
}

function mouseOut() {
    document.getElementById("butn").style.color = "DarkSlateGrey";
}

function perimeter() {

    //precondition: w, h belongs to real numbers
    //postcondition: perimeter is calculated and outputted
    var w = document.getElementById("number1").value;
    var h = document.getElementById("number2").value;
    var p = 2 * (w + h);
    document.getElementById("output").innerHTML = "perimeter: " + p;

}