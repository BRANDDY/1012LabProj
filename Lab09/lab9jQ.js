/* 12a22s lab9 jQuery */
$(document).ready(function() {


    $("#btn-greet").click(function() {
        alert("Greetings! How are you?");
    });


    $("#btn-changeText").click(function() {
        $("#paragraph").html("Hello World !!!");
    });

    // add more here
    $("#btn-changeColor").click(function() { // change text color
        $("#paragraph").css("color", "Blue");
    });

    $("#btn-changeSize").click(function() {
        $("#paragraph").css("fontSize", "40px");
    })

    $("#btn-changeIt").click(function() {
        $("#paragraph").css("fontStyle", "Italic");
    })

    $("#btn-changeBold").click(function() {
        $("#paragraph").css("fontWeight", "Bold");
    })

    $("#btn-changeUnderline").click(function() {
        $("#paragraph").css("textDecoration", "Underline");
    })
    $("#btn-background").click(function() {
        $("#paragraph").css("backgroundColor", "Yellow");
    })
    $("#btn-changeImage").click(function() {
        $("#image").attr("src", "swim.jpg");
    })
});