/* 22s Task 1 - write your code here */
function on_1(){
 /* set image src to be that for light 1, and set message texts to be "light #1 is on"  */
    document.getElementById("light").src="images/light/light_1.jpg";
    document.getElementById("message").innerHTML="light #1 is on"
}

/* implement function onB(), onC(), onD(), onE() that are similar to onA() */
function on_2(){
    document.getElementById("light").src="images/light/light_2.jpg";
    document.getElementById("message").innerHTML="light #2 is on"
}
function on_3(){
    document.getElementById("light").src="images/light/light_3.jpg";
    document.getElementById("message").innerHTML="light #3 is on"
}
function on_4(){
    document.getElementById("light").src="images/light/light_4.jpg";
    document.getElementById("message").innerHTML="light #4 is on"
}
function on_5(){
    document.getElementById("light").src="images/light/light_5.jpg";
    document.getElementById("message").innerHTML="light #5 is on"
}


/* implement function oFF() for switching off the light*/
function oFF(){
    document.getElementById("light").src="images/light/light_0.jpg";
    document.getElementById("message").innerHTML="all light are off"
}
