(function () {
    "use strict";

    // Only show gallery once the css has loaded
    var galleryload_flag = false;
    onloadCSS(gallerycss1, function () {
        console.log("Gallery 1 has loaded.");
        if (galleryload_flag == true) {
            document.querySelector('.gallery').style.opacity = 1;
        } else {
            galleryload_flag = true;
        }
    });
    onloadCSS(gallerycss2, function () {
        console.log("Gallery 2 has loaded.");
        if (galleryload_flag == true) {
            document.querySelector('.gallery').style.opacity = 1;
        } else {
            galleryload_flag = true;
        }
    });
    // Ensure gallery does get loaded in case the loadCSS event didn't fire
    setTimeout(function () {
        var gal = document.querySelector('.gallery');
        if (gal.style.opacity === 0) gal.style.opacity = 1;
    }, 1500);

    // Challenge Section Gallery Event Listener
    var challengeGallery = document.getElementById('challenge-gallery');
    var lastClass = "";
    var challengeClickListener = function () {
        var pcard = document.getElementById('challenge-expanded');
        if (event.target.offsetParent.id !== "challenge-expanded") {
            pcard.classList.remove('fade-in');
            pcard.classList.add('fade-out');
            document.body.removeEventListener('click', challengeClickListener, false);
        }
    };
    challengeGallery.addEventListener('click', function () {
        if (event.target.id !== "challenge-gallery") {
            var pcard = document.getElementById('challenge-expanded');
            var sub = document.getElementById('challenge-expanded--sub');
            pcard.classList.remove('fade-out');
            pcard.classList.add('fade-in');
            if (lastClass.length > 0) {
                pcard.classList.remove(lastClass);
            }
            if (event.target.id === 'cg-1') {
                pcard.classList.add('challenge-img-1');
                sub.innerHTML = "Top view of the obstacle course.";
                lastClass = 'challenge-img-1';
            } else if (event.target.id === 'cg-2') {
                pcard.classList.add('challenge-img-2');
                sub.innerHTML = "Getting Steve ready for another test run.";
                lastClass = 'challenge-img-2';
            } else if (event.target.id === 'cg-3') {
                pcard.classList.add('challenge-img-3');
                sub.innerHTML = "Side view of the obstacle course.";
                lastClass = 'challenge-img-3';
            } else if (event.target.id === 'cg-4') {
                pcard.classList.add('challenge-img-4');
                sub.innerHTML = "Top of ramp and the safety area.";
                lastClass = 'challenge-img-4';
            } else if (event.target.id === 'cg-5') {
                pcard.classList.add('challenge-img-5');
                sub.innerHTML = "Inside of the 'burning' building.";
                lastClass = 'challenge-img-5';
            } else if (event.target.id === 'cg-6') {
                pcard.classList.add('challenge-img-6');
                sub.innerHTML = "Side view from the top of the ramp.";
                lastClass = 'challenge-img-6';
            }
            event.stopPropagation();
            document.body.addEventListener('click', challengeClickListener, false);
        }
    }, false);

    // Darken the header after some scrolling
    var header = document.querySelector('header > .mdl-layout__header-row');
    var range = 400;
    document.querySelector('main').addEventListener('scroll', function (e) {
        var val = this.scrollTop / range;
        val = val < 0.72 ? 0.72 : val;
        document.querySelector('.overlay').style.opacity = val;
    }, false);

    // Injects youtube video to container on click
    function injectYT() {
        var iframe = document.createElement("iframe");
        console.log(this.childNodes);
        iframe.setAttribute("src", this.dataset.link + "/?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0&rel=0");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("id", "yt-iframe");
        this.replaceChild(iframe, this.childNodes[1]);
    }
    var yt = document.querySelector("#feature-video > .vid-container");
    yt.addEventListener('click', injectYT, false);


})();