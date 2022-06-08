/* 22s 1012 JS files */
function p01Func() {

    document.getElementById("problem").innerHTML = "<p>The harp is a stringed musical instrument that has a number of individual strings running at an angle to its soundboard; the strings are plucked with the fingers. Its most common form is triangular in shape and made of wood. </p>";



    /* the following three lines gets the checkboxes, and unchecks them
    */
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    /* in Ex3, update display of images */

    document.getElementById("another").src = "images/harp/harp-another.jpg"
    document.getElementById("flowchart").src = "images/harp/pict-harp.jpg"
    document.getElementById("js").src = "images/harp/harp-play.jpg"
    
    checkUncheck1();
    checkUncheck2();
    checkUncheck3();
    zoomOut();
}




/* in Ex2, uncomment the following function and complete it*/


function checkUncheck1() {
    if (document.getElementById("check1").checked == true) {
        document.getElementById("flowchart").style.display = "inline";
    }
    else {
        document.getElementById("flowchart").style.display = "none";
    }
}


function checkUncheck2() {
    if (document.getElementById("check2").checked == true) {
        document.getElementById("js").style.display = "inline";


    }
    else {
        document.getElementById("js").style.display = "none";



    }
}

function checkUncheck3() {
    if (document.getElementById("check3").checked == true) {
        document.getElementById("another").style.display = "inline";


    }
    else {
        document.getElementById("another").style.display = "none";



    }
}


function p02Func() {

    document.getElementById("problem").innerHTML = "The cello or violoncello is a bowed (sometimes plucked and occasionally hit) string instrument of the violin family. Music for the cello is generally written in the bass clef, with tenor clef and treble clef used for higher-range passages."

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;


    document.getElementById("js").src = "images/cello/woman-playing-cello.jpg"
    document.getElementById("flowchart").src = "images/cello/cello-parts.jpg"
    document.getElementById("another").src = "images/cello/cello-another.jpg"
    checkUncheck1();
    checkUncheck2();
    checkUncheck3();
    zoomOut();
}

function zoomIn() {
    document.getElementById("flowchart").style.width = "200%";
}

function zoomOut() {
    document.getElementById("flowchart").style.width = "100%";
}