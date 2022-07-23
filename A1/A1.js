/* JavaScript Examples, A1, EECS1012 22s */

function problem1(){
	var p = document.getElementById("mydata");
	
	var str1 = prompt("enter string: ");
	p.innerHTML= str1; /* display input string */
	
	/* you implementation here */
	var control=true;
	for(var i=0;i<=str1.length/2 && control==true;i++){
		if(str1[i]!=str1[str1.length-1-i]){
			control=false;
		}
	}
	if(control){
		p.innerHTML+="<br>"+"Symmetric";
	}else{
		p.innerHTML+="<br>"+"Not Symmetric";
    }
}

function problem2A() {
    var p = document.getElementById("mydata");
    var limit = 100;
    var arrayMax = 10;
    var myArray = [];
    var newArray = [];
    var small = true;
    for (var i = 0; i < arrayMax; i++) {
        myArray.push(Math.floor(Math.random() * limit));
    }
    p.innerHTML = myArray;

    while (myArray.length > 0) {
        for (var i = 0; i < myArray.length; i++) {
            small = true;
            for (var t = 0; t < myArray.length && small; t++) {
                if (myArray[i] > myArray[t]) {
                    small = false;
                }
            }
            if (small) {
                newArray.push(myArray[i]);
                myArray.splice(i, 1);
            }
        }
    }
    p.innerHTML += "<br>" + newArray;
}

function problem2B() {
    var p = document.getElementById("mydata");
    var myArray = [];
    var arrayMax = 10;
    var limit = 100;
    var m = 0;
    var tmp;
    var small = false;
    for (var i = 0; i < arrayMax; i++)
        myArray.push(Math.floor(Math.random() * limit));
    p.innerHTML = myArray;

    while (m < myArray.length) {
        for (var i = m; i < myArray.length; i++) {
            for (var t = m; t < myArray.length && small; t++) {
                if (myArray[i] > myArray[t]) {
                    small = false;
                }
            }
            if (small) {
                tmp = myArray[i];
                myArray[i] = myArray[m];
                myArray[m] = tmp;
                m++;
            }
            small = true;
        }
    }
    p.innerHTML += "<br>" + myArray;
}

function problem3(){

	var arr=[8, 9, 9, 12, 13, 13, 13, 15, 20, 100, 100, 101, 123, 129, 300, 330, 390, 400, 403, 407];
	
	var p = document.getElementById("mydata");
	
	var start = 0;
	var end = arr.length - 1;
	var ctrl = false;
	var key = prompt("enter search key","");

	while(start <= end && ctrl == false) {

		var mid =Math.floor((start + end)/2)
		
		if(key<arr[mid]){
			end = mid-1;
		}
		else if(key>arr[mid]){
			start = mid+1;
		}
		else{
			ctrl=true;
		}
		
	}
	if(ctrl){
		p.innerHTML = key +" in arr: YES";
	}
	else{
		p.innerHTML = key +" in arr: NO";
	}
	 
}


function problem4() {
    var p = document.getElementById("mydata");
    var myArray = [];
    var arrayMax = Math.floor(Math.random() * 6);
    var limit = 2;
    var trans = 0;
    for (var i = 0; i < arrayMax + 4; i++) {
        myArray.push(Math.floor(Math.random() * limit));
    }
    p.innerHTML = myArray;

    for (var i = myArray.length - 1; i >= 0; i--) {
        var temp = power(2, myArray.length - i - 1);
        trans = trans + temp * myArray[i];
    }
    p.innerHTML += "<br>" + trans;
}

function power(base, n) {
    var num = 1;
    for (var i = 1; i <= n; i++) {
        num *= base;
    }
    return num;
}