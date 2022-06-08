/* Webpage HTML document for Lab 4.
   For: EECS 1012s, York University, Lassonde School of Engineering */
// for Ex2 to Ex6, change the name of the following function properly

function mouseOver(){
  document.getElementById("butn").style.color="Red";
}

function mouseOut(){
  document.getElementById("butn").style.color="DarkSlateGrey";
}

function perimeter() {

  //precondition: w, h belongs to real numbers
  //postcondition: perimeter is calculated and outputted

  
  var w=document.getElementById("number1").value;
  var h=document.getElementById("number2").value;
  
  /* in Ex2 to Ex6, you need to replace the following line 
      with some other formulas */
  var p = 2 * (w + h);
 
    
  /* in Ex2 to Ex6A, you need to rename "perimeter" to make it appropriate
     for those problems, you may also need to rename p to a better 
	 variable that you might have in your formulas above */ 

  /* in Ex6A mappingA() do sth like
  var a = ...;
  if(a >= 90)
    answer = "A+";
  else if (a>=80)
    answer = "A";
  else if ....
  */

  document.getElementById("output").innerHTML="perimeter: "+p; 

}

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