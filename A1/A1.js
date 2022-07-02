/* JavaScript Examples, A1, EECS1012 22s */

function problem1() {
    var p = document.getElementById("mydata");
    var str1 = prompt("enter string: ");
    var str2 = "";
    p.innerHTML = str1; /* display input string */
    var letter;
    for (letter of str1) {
        str2 = letter + str2;
    }
    if (str1 == str2) {
        p.innerHTML = str1 + " is symmetric";
    } else {
        p.innerHTML = str1 + " is not symmetric";
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
    while (myArray.length > 1) {
        for (var i = 0; i < myArray.length; i++) {
            small = true;
            for (var t = 0; t < myArray.length; t++) {
                if (myArray[i] > myArray[t]) {
                    small = false;
                    t = myArray.length; //stop the loop earlier
                }
            }
            if (small) {
                newArray.push(myArray[i]);
                console.log(myArray[i]);
                myArray.splice(i, 1);
            }
        }
    }
    newArray.push(myArray[0]);
    p.innerHTML = p.innerHTML + "<br>" + newArray;
}


function problem2B() {
    var p = document.getElementById("mydata");
    var myArray = [];
    var arrayMax = 10;
    var limit = 100;
    var tmp;
    for (var i = 0; i < arrayMax; i++)
        myArray.push(Math.floor(Math.random() * limit));
    p.innerHTML = myArray;
    for (var i = 0; i < myArray.length; i++) {
        for (var t = 0; t < myArray.length - 1 - i; t++) {
            if (myArray[t] > myArray[t + 1]) {
                tmp = myArray[t];
                myArray[t] = myArray[t + 1];
                myArray[t + 1] = tmp;
            }
        }
    }
    p.innerHTML = p.innerHTML + "<br>" + myArray;
}

function problem3() {
    var arr = [8, 9, 9, 12, 13, 13, 13, 15, 20, 100, 100, 101, 123, 129, 300, 330, 390, 400, 403, 407];
    var m;
    var loop = true;
    var num = parseInt(prompt("Please enter an intage:", ""));
    document.getElementById("mydata").innerHTML = num + " in arr: ";

    while (loop && arr.length > 0) {
        m = Math.floor(arr.length / 2);
        if (num == arr[m]) {
            loop = false;
        } else if (num > arr[m]) {
            arr.splice(0, m + 1);
        } else {
            arr.splice(m, arr.length - m);
        }
    }
    if (!loop) {
        document.getElementById("mydata").innerHTML = document.getElementById("mydata").innerHTML + "YES";
    } else {
        document.getElementById("mydata").innerHTML = document.getElementById("mydata").innerHTML + "NO";
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

    for (i = 0; i < myArray.length; i++) {
        var temp = power(2, myArray.length - 1 - i);
        trans = trans + temp * myArray[i];
    }
    p.innerHTML = p.innerHTML + "<br>" + trans;
}

function power(base, n) {
    var num = 1;
    for (i = 1; i <= n; i++) {
        num *= base;
    }
    return num;
}

function problem3A() {
    var p = document.getElementById("mydata");
    var str1 = prompt("Please enter the first sting:", "");
    var str2 = prompt("Please enter the second sting:", "");
    var symb;
    var list1 = splice(str1);
    var list2 = splice(str2);

    for (i = 0; i < list1.length; i++) {
        if (list1[i] < list2[i]) {
            symb = "<";
            i = list1.length;
        } else if (list1[i] > list2[i]) {
            symb = ">";
            i = list1.length;
        } else {
            symb = "==";
        }
    }
    p.innerHTML = str1 + " " + symb + " " + str2;
}

function problem3B() {
    var p = document.getElementById("mydata");
    var str1 = prompt("Please enter the first sting:", "");
    var str2 = prompt("Please enter the second sting:", "");
    var symb;
    var loop = true;
    var list1 = splice(str1);
    var list2 = splice(str2);
    while (list1.length > 0 && list2.length > 0 && loop) {
        if (list1[0] < list2[0]) {
            symb = "<";
            loop = false;
        } else if (list1[0] > list2[0]) {
            symb = ">";
            loop = false;
        } else {
            symb = "==";
        }
        list1.shift();
        list2.shift();
    }
    if (loop) {
        switch (true) {
            case (list1.length > 0):
                symb = ">";
                break;
            case (list2.length > 0):
                symb = "<";
                break;
        }
    }

    p.innerHTML = str1 + " " + symb + " " + str2;
}

function splice(string) {
    var list = [];
    for (temp of string) {
        list.push(temp);
    }
    return list;
}