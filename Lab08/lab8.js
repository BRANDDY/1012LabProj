/* 1012a22s JavaScript code for lab8 */
/* Add your Java Script Code Here */

function problemA() {

    var p = document.getElementById("mydata");

    var input1 = parseInt(prompt("enter number m: "));
    var input2 = parseInt(prompt("enter number n: "));
    var resu = multiply(input1, input2);
    p.innerHTML = input1 + " * " + input2 + " = " + resu; // generate output as shown in pdf
}

// a recursive function. no loop should be used
function multiply(m, n) {
    if (n <= 0) {
        return 0;
    } else {
        return m + multiply(m, n - 1);
    }
}



function problemB() {

    var p = document.getElementById("mydata");

    var input = parseInt(prompt("enter number: "));

    var resu = count37(input);

    p.innerHTML = "number of 3 or 7's in " + input + ": " + resu; // generate output as shown in pdf

}

// a recursive function. no loop should be used
function count37(num) {
    if (num == 0) {
        return 0;
    } else {
        if (num % 10 == 7 || num % 10 == 3) {
            num = Math.floor(num / 10);
            return 1 + count37(num);
        } else {
            num = Math.floor(num / 10);
            return count37(num);
        }
    }
}



function problemC() {

    var p = document.getElementById("mydata");

    var arr = [7, 3, 5, 9, 8, 6, 1, 4];

    var sum0 = arraySum0(arr);

    var sum = arraySum(arr, 0);

    p.innerHTML = arr + " sum is: " + sum0 + " " + sum;

}

function arraySum0(arr) {
    if (arr.length == 1) // or  if(arr.length==0) return 0;
        return arr[0];
    return arr[0] + arraySum0(arr.slice(1));

}

// a recursive function. no loop should be used
function arraySum(arr, index) {
    if (index == arr.length - 1) {
        return arr[index];
    } else {
        return arr[index] + arraySum(arr, index + 1);
    }

}


function problemD() {

    var p = document.getElementById("mydata");

    var arr = [7, 3, 9, 9, 8, 6, 1, 4];

    var max0 = arrayMaxIterative(arr);

    var max1 = arrayMaxRecursiveA(arr);

    var max2 = arrayMaxRecursiveB(arr, 0);

    p.innerHTML = arr + " max is: " + max0 + " " + max1 + " " + max2;

}

// iterative function. use loop
function arrayMaxIterative(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// a recursive function. no loop should be used
// pass arr only.    
function arrayMaxRecursiveA(arr) {
    if (arr.length == 1) {
        return arr[0];
    } else {
        var max = arrayMaxRecursiveA(arr.slice(1));
        if (arr[0] > max) {
            return arr[0];
        } else {
            return max;
        }
    }
}

// a recursive function. no loop should be used
// pass arr and a sliding index    
function arrayMaxRecursiveB(arr, index) {
    if (index == arr.length - 1) {
        return arr[index];
    } else {
        var max = arrayMaxRecursiveB(arr, index + 1);
        if (arr[index] > max) {
            return arr[index];
        } else {
            return max;
        }
    }
}


function problemE() {
    var p = document.getElementById("mydata");

    var input = prompt("enter string to be reversed: ");

    var resu = reverse(input)
    p.innerHTML = input + " <--> " + resu;

}

function reverse(s) {
    if (s.length < 2) {
        return s;
    } else {
        return reverse(s.slice(1)) + s[0];
    }

}

function problemF() {

    var arr = [8, 9, 9, 12, 13, 13, 13, 15, 20, 100, 100, 101, 123, 129, 300, 330, 390, 400, 403, 407];
    var key = parseInt(prompt("enter search key for " + arr));

    var p = document.getElementById("mydata");

    var resu = findit(key, arr, 0, arr.length - 1);

    // output results as shown in pdf
    p.innerHTML = key + " in arr: " + resu;
}

// a recursive function. no loop should be used
function findit(x, A, i, j) {
    var mid = Math.floor((j - i) / 2) + i;
    if (x == A[mid]) {
        return "Yes";
    } else {
        if (j - i <= 0) {
            return "No";
        } else if (x < A[mid]) {
            return findit(x, A, i, mid - 1);
        } else if (x > A[mid]) {
            return findit(x, A, mid + 1, j);
        }
    }
}


function problemG() {
    var p = document.getElementById("mydata");

    var str = prompt("enter string: ");

    var resu = symmetric(str, 0, str.length - 1);

    // output results as shown in pdf
    p.innerHTML = str + '<br>' + resu;
}

function symmetric(s, i, j) {
    if (i >= j) {
        return "Symmetric";
    } else {
        if (s[i] == s[j]) {
            return symmetric(s, i + 1, j - 1);
        } else {
            return "Not symmetric";
        }
    }
}