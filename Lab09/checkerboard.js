/* 12a22s lab9 checkerboard */

function array2D(){
	
  var arr = [
   [1, 2, 3],
   [5, 6, 7],
   [9, 10,11],
   [13,14,15], 
   [23,24,25]];
 
  display(arr);
  var s = sum(arr);
  alert ("sum of divisible-by-5 elements: " + s );

}

function display(arr){
	var out="";
	for (var i=0; i< arr.length ; i++)
	{
		for (var j=0; j<arr[j].length;j++ )
		{
			out +=  arr[i][j] + " ";
	
		}
		//out += "<br>"; // "<br>" for innerHTML
		out += "\n"; // \n for alert and console log
	}
	 
	alert(out);
}

// TODO: implement this function
function sum(arr){
	 
	....

	return ... ;
}


/*****************************************************************/

function drawTheCells() {
    //pre: none
    //post: draw a n by n checkerboard with the top-left cell in red; the
    //      alternate colour is black

    // TODO: write your JavaScript Code here ...
	// hint: use nested loop to drop each cell in the array, calling subfunctions accordingly. 
	var n = prompt("size of checkerboard? ");
	 



}


// You do NOT need to make any changes in the following function
// But, feel free to use this function is in your JavaScript code above.
function drawOneCell(color) {
    //pre: color in {"red", "black"}
    //post: add a button with colour "color" to the element with id #div1
    
    var newButton = document.createElement("button");
    $(newButton).attr("class", color);
    $("#div1").append(newButton);

}

function drawNewLine() {
    document.getElementById("div1").innerHTML += "<br>";
}