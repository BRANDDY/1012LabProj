// -- lab7 1012a22s --
function turnOn(num) {
    var im = document.getElementById("light");
    var msg = document.getElementById("message");

    switch (num == 0) {
        case true:
            msg.innerHTML = "all light are off";
            im.src = "images/light/light_0.jpg";
            break;
        case false:
            msg.innerHTML = "light #" + num + " is on";
            im.src = "images/light/light_" + num + ".jpg";
            break;
    }
}