/* Webpage HTML document for Lab 4.
   For: EECS 1012s, York University, Lassonde School of Engineering */
// for Ex2 to Ex6, change the name of the following function properly


function mouseOver() {
    document.getElementById("butn").style.color = "Red";
}

function mouseOut() {
    document.getElementById("butn").style.color = "DarkSlateGrey";
}

//pre: 0<=a<=100 and a is a rational number
//post: mapping of a to one of A+,A,B+,B,C+,C,D+,D or F isoutputted

function mappingA() {
    var a = parseFloat(document.getElementById("number1").value);
    if (a >= 90) {
        answer = "A+";
    } else if (a >= 80) {
        answer = "A";
    } else if (a >= 75) {
        answer = "B+";
    } else if (a >= 70) {
        answer = "B";
    } else if (a >= 65) {
        answer = "C+";
    } else if (a >= 60) {
        answer = "C";
    } else if (a >= 55) {
        answer = "D+";
    } else if (a >= 50) {
        answer = "D";
    } else {
        answer = "F";
    }

    document.getElementById("output").innerHTML = answer;
}

function mappingB() {
    var a = parseFloat(document.getElementById("number1").value);
    switch (true) {
        case (a >= 90):
            answer = "A+";
            break;
        case (a >= 80):
            answer = "A";
            break;
        case (a >= 75):
            answer = "B+";
            break;
        case (a >= 70):
            answer = "B";
            break;
        case (a >= 65):
            answer = "C+";
            break;
        case (a >= 60):
            answer = "C";
            break;
        case (a >= 55):
            answer = "D+";
            break;
        case (a >= 50):
            answer = "D";
            break;
        default:
            answer = "F";
    }
    document.getElementById("output2").innerHTML = answer;
}