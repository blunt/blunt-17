var body = document.getElementsByTagName('body')[0];

var fadeIn = () => {
  body.classList.add('fade-in');
} 

window.onload = fadeIn


if ("ontouchstart" in document.documentElement) {
    //Device movement mobile
    function handleOrientation(event) {
        var x = event.beta;  // In degree in the range [-180,180]
        var y = event.gamma; // In degree in the range [-90,90]

        // Because we don't want to have the device upside down
        // We constrain the x value to the range [-90,90]
        if (x >  90) { x =  90};
        if (x < -90) { x = -90};

        // To make computation easier we shift the range of 
        // x and y to [0,6]
        y += 6;

        document.getElementById('marquee').style.transform = "translateX(" + (y-150) + "%) skewX(" + (x-50) + "deg)"
    }
    window.addEventListener('deviceorientation', handleOrientation);
} else {
    //Mouse movement desktop
    document.onmousemove = function (e) { mousePos(e); };
    var mouseX = 0;
    var mouseY = 0;
    function mousePos (e) {
        mouseX = event.clientX;
        mouseY = event.clientY;

        var mouseXLast = mouseX / 25 + 50;
        var mouseYLast = mouseY / 25;

        document.getElementById('marquee').style.transform = "translateX(-" + mouseXLast + "%) skewX(" + (mouseYLast-20) + "deg)"
        return true;
    }
}

//Easter egg
function onKonamiCode(cb) {
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onKonamiCode(function () {
    document.getElementsByClassName('emoji-container')[0].classList.add('visible');
});