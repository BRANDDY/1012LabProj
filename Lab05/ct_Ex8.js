// For: 22s EECS 1012, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly
function separateDigits() {
    /* this statement defines an object reference to the 
     html element having an ID "output".
	 Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");

    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    outputObj.innerHTML = outputObj.innerHTML + "number: " + a;
    var b = "";
    while (a > 0) {
        b = a % 10 + ", " + b;
        a = Math.floor(a / 10);
    }
    outputObj.innerHTML = outputObj.innerHTML + " <br><br>" + "its digits: " + b + " <br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}