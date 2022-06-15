// For: 22s EECS 1012, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly
function factorial_A() {
    /* this statement defines an object reference to the 
     html element having an ID "output".
	 Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");

    // this statement receives some data and parses it to integer
    var n = parseInt(prompt("Please enter a positive integer number: ", ""));
    var y = 1;
    outputObj.innerHTML = outputObj.innerHTML + "number: " + n;
    for (i = 1; i <= n; i++) {
        y = y * i;
    }
    outputObj.innerHTML = outputObj.innerHTML + " <br><br>" + n + "! = " + y + "(A)";
    factorial_B(n);
    outputObj.innerHTML = outputObj.innerHTML + " <br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}

// for Ex11   take input named num  and computer num!
function factorial_B(num) {
    // num is the input, calculate factorial of num. Use num as variable name.
    var n = num;
    var y = 1;
    while (num > 0) {
        y = y * num;
        num--;
    }
    var outputObj = document.getElementById("output");
    outputObj.innerHTML = outputObj.innerHTML + "<br>" + n + "! = " + y + "(B)";
}