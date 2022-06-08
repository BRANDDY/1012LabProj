/* Webpage HTML document for Lab 4.
   For: EECS 1012s, York University, Lassonde School of Engineering */
// for Ex2 to Ex6, change the name of the following function properly

function mouseOver() {
    document.getElementById("butn").style.color = "Red";
}

function mouseOut() {
    document.getElementById("butn").style.color = "DarkSlateGrey";
}

//pre: a is a rational number
//post: whether the a can divisible by 6 and equal to 0

function divisibleBy6() {
    var a = parseFloat(document.getElementById("number1").value);
    if ((a % 2 == 0) && (a % 3 == 0)) {
        document.getElementById("output").innerHTML = "divisible by 6";
    } else {
        document.getElementById("output").innerHTML = "not divisible by 6";
    }
    if (a == 0) {
        document.getElementById("output").innerHTML = "divisible by 6 <br> program ended";
        document.getElementById("butn").disabled = true;
    }
}