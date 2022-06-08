/* 22s 1012 JS files */
function p01Func() {
  /* in Ex1, set message text and image sources for problem01*/
  document.getElementById("problem").innerHTML=
  "<p>The harp is a stringed musical instrument that has a number of individual strings running at an angle to its soundboard; the strings are plucked with the fingers. Its most common form is triangular in shape and made of wood.</p>";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;

  /* in Ex3, update display of images */
  document.getElementById("flowchart").src="images/harp/pict-harp.jpg";
  document.getElementById("js").src="images/harp/harp-play.jpg";
  document.getElementById("another").src="images/harp/harp-another.jpg";
  
  checkUncheck1();
  checkUncheck2();
  checkUncheck3();
}

/* in Ex2, uncomment the following function and complete it*/
function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
   document.getElementById("flowchart").style.display = "inline";
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to one of "inline" or "none"	  
  }
  else {
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to one of "inline" or "none"	 
     document.getElementById("flowchart").style.display = "none";  
  }
}

function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
     // add a getElementById here to get "js" img and 
     // set the display property of its style  
    document.getElementById("js").style.display = "inline";	 
  }
  else {
     // add a getElementById here to get "js" img and 
     // set the display property of its style  
     document.getElementById("js").style.display = "none";	  
  }
}

/* in Ex2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/
function checkUncheck3(){
   if (document.getElementById("check3").checked==true) {
    document.getElementById("another").style.display = "inline";
   }
   else {	 
      document.getElementById("another").style.display = "none";      
   }
}

/* in Ex3, create function p02Func similar to p01Func */
function p02Func() {
   document.getElementById("problem").innerHTML=
   "<p>The cello or violoncello is a bowed (sometimes plucked and occasionally hit) string instrument of the violin family. Music for the cello is generally written in the bass clef, with tenor clef and treble clef used for higher-range passages.</p>";

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
 
   document.getElementById("flowchart").src="images/cello/cello-parts.jpg";
   document.getElementById("js").src="images/cello/woman-playing-cello.jpg";
   document.getElementById("another").src="images/cello/cello-another.jpg";  
   
   checkUncheck1();
   checkUncheck2();
   checkUncheck3();
 }
/* in Ex4, create functions zoomIn() and zoomOut() */
