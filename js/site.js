var setup;
var origDocHeight;

function infiniteScroll() {
    if(Modernizr.mq('(min-width: 1024px)')) {
        if(setup != true) {
            origDocHeight = document.body.offsetHeight;

            var container = document.getElementsByClassName('container')[0];

            var clone = container.cloneNode(true);
            document.body.appendChild(clone);
            document.body.insertBefore(clone, document.body.childNodes[0]);

            setup = true;
        }

        window.onscroll = function() {
            var scrollWindowPos = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            if(scrollWindowPos >= origDocHeight ) {
                window.scrollTo(0,0);
            }
            if(scrollWindowPos <= 0 ) {
                window.scrollTo(0, origDocHeight);
            }
        };
    } else {
        if(setup == true) {
            setup = false;

            window.onscroll = null;

            var container = document.getElementsByClassName('container');

            if(container[1]) {
                while(container[1])
                    container[1].parentNode.removeChild(container[1]);
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", infiniteScroll);

window.onresize = function(event) {
    origDocHeight = document.body.offsetHeight / 2;

    infiniteScroll();
};
