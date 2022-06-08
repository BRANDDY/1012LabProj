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
//post: whether the equation has 2,1,or 0 rppts in rational number

function largestOf3() {
    var a = parseFloat(document.getElementById("number1").value);
    var b = parseFloat(document.getElementById("number2").value);
    var c = parseFloat(document.getElementById("number3").value);
    if ((b * b) > (4 * a * c)) {
        document.getElementById("output").innerHTML = "it has 2 distinct roots";
    } else if ((b * b) == (4 * a * c)) {
        document.getElementById("output").innerHTML = "its roots are identical";
    } else {
        document.getElementById("output").innerHTML = "it has no roots in real number";
    }


}