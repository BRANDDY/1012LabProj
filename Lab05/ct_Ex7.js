// For: 22s EECS 1012, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly
function readInteger() {
    /* this statement defines an object reference to the 
     html element having an ID "output".
	 Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");

    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    while (a != 0) {
        if (a > 0) {
            outputObj.innerHTML = outputObj.innerHTML + a + ": is positive <br>";
        } else if (a < 0) {
            outputObj.innerHTML = outputObj.innerHTML + a + ": is negative <br>";
        }
        a = parseInt(prompt("Please enter a number: ", ""));
    }


    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");

    /* this statement add some message to our output Object used for Ex8
       you would need to change the message to be appropriate in Ex9 to E13 */

    //  outputObj.innerHTML = "number: " + a + "<br><br>its digits: "; // uncomment this line for Ex8

    // translate the rest of your flowcharts to js here:

    // factorial_B(a);  // for Ex11  call function factorial_B, passing a

    //the following statements inform the user that the program ended
    //and disable the button.  Ctrol+F5 to refresh the browser in order to start over
}

// for Ex11   take input named num  and computer num!
/*factorial_B (num) {
    // num is the input, calculate factorial of num. Use num as variable name.


	var outputObj = document.getElementById("output");

}*/