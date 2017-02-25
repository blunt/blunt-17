(function() {
    var origDocHeight = document.body.offsetHeight;

    var container = document.getElementById('container');

    var clone = container.cloneNode(true);
    document.body.appendChild(clone);
    document.body.insertBefore(clone, document.body.childNodes[0]);

    window.onscroll = function() {
        var scrollWindowPos = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if(scrollWindowPos >= origDocHeight ) {
            window.scrollTo(0,0);
        }
        if(scrollWindowPos <= 0 ) {
            window.scrollTo(0, origDocHeight);
        }
    };
})();
