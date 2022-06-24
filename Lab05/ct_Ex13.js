// For: 22s EECS 1012, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly
function triangle() {
    document.getElementsByTagName("p")[0].style.textAlign = "left";
    var outputObj = document.getElementById("output");

    var n = parseInt(prompt("Please enter a integer greater than 1: ", ""));
    outputObj.innerHTML = outputObj.innerHTML + "number: " + n;
    for (i = 0; i <= n; i++) {
        outputObj.innerHTML = outputObj.innerHTML + "<br>";
        for (t = 0; t < i; t++) {
            outputObj.innerHTML = outputObj.innerHTML + "[] ";
        }
    }
    outputObj.innerHTML = outputObj.innerHTML + " <br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}