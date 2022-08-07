/* 12a22s lab9 regular js */
/* write your code here */

/* pop up alert with message "Greetings! How are you?" */
function greet() {

    alert("Greetings! How are you?");
}

/* change the message box text to "Hello World !!!"  */
function changeText() {

    var msg = document.getElementById("paragraph");
    msg.innerHTML = "Hello World !!!";

}

/* change the message box text color to blue  */
function changeColor() {
    document.getElementById("paragraph").style.color = 'Blue';
}

/* change the message box font size to 40px */
function changeSize() {
    document.getElementById("paragraph").style.fontSize = "40px";

}

/* change the message box text to be italic */
function changeIt() {
    document.getElementById("paragraph").style.fontStyle = "Italic";

}

/* change the message box text to be bold  */
function changeBold() {
    document.getElementById("paragraph").style.fontWeight = "Bold";

}

/* change the message box text to be underlined  */
function changeUnderline() {
    document.getElementById("paragraph").style.textDecoration = "Underline";
}


/* change the message box background to be yellow  */
function background() {
    document.getElementById("paragraph").style.backgroundColor = "Yellow";
}

/* change the imaged displayed to be "swim.jpg"  */
function changeImage() {
    document.getElementById("image").src = "swim.jpg";
}