var setup;

function infiniteScroll() {
    if(Modernizr.mq('(min-width: 1024px)')) {
        if(setup != true) {
            var origDocHeight = document.body.offsetHeight;

            var container = document.getElementsByClassName('container')[0];

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

            setup = true;
        }
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

infiniteScroll();

window.onresize = function(event) {
    infiniteScroll();
};
