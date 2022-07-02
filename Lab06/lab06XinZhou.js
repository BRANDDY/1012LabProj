function checkPrime() {
    var num = parseInt(prompt("Please enter an intage:", ""));
    var prime = true;
    var d = 2;
    var output;
    while (prime && d <= (num / 2)) {
        if (num % d == 0) {
            prime = false;
        }
        d++;
    }
    if (prime) {
        output = " is prime";
    } else {
        output = " is not prime";
    }
    document.getElementById("output1").innerHTML = num + output;
}

function posANDneg() {
    var p = 0;
    var n = 0;
    var num;
    do {
        num = parseInt(prompt("Please enter an Intage: ", ""));
        if (num > 0) {
            p++;
        } else if (num < 0) {
            n++;
        }
    } while (num != 0 && p <= 2 * n)
    document.getElementById("output2").innerHTML = "p:" + p + "<br> n:" + n;
}

function conversion() {
    var num = parseInt(prompt("Please enter a positive int:", ""));
    var bin = "";
    var n = num;
    while (n != 0) {
        if (n % 2 == 0) {
            bin = '0' + bin;
        } else {
            bin = '1' + bin;
        }
        n = Math.floor(n / 2);
    }
    document.getElementById("output3").innerHTML = num + " in binary:" + bin;
}

function comparePosNeg() {
    var cnt1 = 0;
    var cnt2 = 0;
    var output;
    var num;
    for (i = 1; i <= 4; i++) {
        num = parseInt(prompt("Please enter a number:", ""));
        if (num < 0) {
            cnt1++;
        }
    }
    for (i = 1; i <= 4; i++) {
        num = parseInt(prompt("Please enter a number:", ""));
        if (num > 0) {
            cnt2++;
        }
    }
    if (cnt1 == cnt2) {
        output = "Yes";
    } else {
        output = "No"
    }
    document.getElementById("output4").innerHTML = "Is the positive of you first 4 equal to the negative of your last 4? <br>" + output;
}

function sumOFeven() {
    var a = [3, 1, 6, 4, 8, 12];
    var sum = 0;
    for (i = 0; i < 6; i += 2) {
        if (a[i] % 2 == 0) {
            sum = sum + parseInt(a[i]);
        }
    }
    document.getElementById("output5").innerHTML = "The sum of the numbers stored in even position is:" + sum;
}

function primeList() {
    var num = parseInt(prompt("Please enter a number:", ""));
    for (i = 2; i <= num; i++) {
        if (prime(i)) {
            document.getElementById("output6").innerHTML = document.getElementById("output6").innerHTML + "<br>" + i;
            console.log(i);
        }
    }
}

function prime(num) {
    var flag = true;
    var d = 2;
    while (flag && d <= (num / 2)) {
        if (num % d == 0) {
            flag = false;
        }
        d++;
    }
    return flag;
}

function primeANDseven() {
    var list = [6, 7, 13, 17, 31, 37];
    var output = [];
    var check;
    var num;
    for (i = 0; i < list.length; i++) {
        num = parseInt(list[i]);
        check = prime(num);
        while (num != 0 && check) {
            if (num % 10 == 7) {
                output.push(list[i]);
                num = 0;
            }
            num = Math.floor(num / 10);
        }

    }
    document.getElementById("output7").innerHTML = output;
}