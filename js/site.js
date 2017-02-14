window.onscroll = function() {
    var firstHero = document.getElementById("first-hero");
    var lastHero = document.getElementById("last-hero");

    var top = firstHero.getBoundingClientRect().top;
    var bottom = lastHero.getBoundingClientRect().top;
    
    if(top == 0) {
        window.scrollTo(0, bottom)
    }
    if(bottom <= 0) {
        window.scrollTo(0,0);
    }
};
