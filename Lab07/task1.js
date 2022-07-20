// 12m22w JavaScript code for Task 1
// Learning Objective 1: use of sub-algorithm (aka function) with zero parameters
// Learning Objective 2: use of Math.random()

function myFunction() {
    var p = document.getElementById("mydata");

    //call a sub-algorithm to return a random number in [0,1)
    var num = generateNum();
    /*TODO 1: write an if statement here that--based on the value 
     of num--changes the paragraph content to num -> HEADS or mun -> TAILS 
     num should have 2 decimal digits */
    if (num < 0.5) {
        p.innerHTML = num + " --> HEADS";
    } else {
        p.innerHTML = num + " --> TAILS";
    }
}

// a sub-algorithm to return a random number
// pre-conditions: none
// post-conditions: returns a random number in [0,1), i.e., 0 inclusive, 1 exclusive
function generateNum() {
    /*TODO 2: implement the body of the function here to return a random number in [0,1) */
    var num = Math.floor(Math.random() * 100) / 100;
    return num;
}