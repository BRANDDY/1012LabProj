/* Webpage HTML document for Lab 4.
   For: EECS 1012s, York University, Lassonde School of Engineering */
// for Ex2 to Ex6, change the name of the following function properly

function mouseOver() {
    document.getElementById("butn").style.color = "Red";
}

function mouseOut() {
    document.getElementById("butn").style.color = "DarkSlateGrey";
}

//pre: a,b,c are floating numbers
//post: output the largest number

function largestOf3() {
    var a = parseFloat(document.getElementById("number1").value);
    var b = parseFloat(document.getElementById("number2").value);
    var c = parseFloat(document.getElementById("number3").value);
    var x = 0;
    if (a > b && a > c) {
        x = a;
    } else if (b > a && b > c) {
        x = b;
    } else {
        x = c;
    }

    document.getElementById("output").innerHTML = "Largest: " + x;

}

/* in Ex6A mappingA() do sth like
var a = ...;
if(a >= 90)
  answer = "A+";
else if (a>=80)
  answer = "A";
else if ....
*/

/* in Ex6B for mappingB() , 
function mappingB(){

  uncomment and complete this block
  var a = ...
  switch (true){
	case (a>=90): 
		answer="A+";
		break;
	case (a>=80): 
		answer="A";
		break;
		// you need to add more cases for other letter grades
	default:
		answer="F";
  }
  
}*/