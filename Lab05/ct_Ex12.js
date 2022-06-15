// For: 22s EECS 1012, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly
function fibonacci() {
    /* this statement defines an object reference to the 
     html element having an ID "output".
	 Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");

    // this statement receives some data and parses it to integer
    var n = parseInt(prompt("Please enter a integer greater than 1: ", ""));
    var a = 0;
    var b = 1;
    outputObj.innerHTML = outputObj.innerHTML + "number: " + n;
    outputObj.innerHTML = outputObj.innerHTML + "<br>Fibonacci:0,1,";
    for (i = 2; i < n; i++) {
        c = b;
        b = a + b;
        a = c;
        outputObj.innerHTML = outputObj.innerHTML + b + ",";
    }
    outputObj.innerHTML = outputObj.innerHTML + " <br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}