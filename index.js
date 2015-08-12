(function () {
    "use strict";

    // Challenge Section Gallery Event Listener
    var challengeGallery = document.getElementById('challenge-gallery');
    var lastClass = "";
    var challengeClickListener = function () {
        var pcard = document.getElementById('challenge-expanded');
        console.log(event);
        if (event.target.offsetParent.id !== "challenge-expanded") {
            pcard.classList.remove('fade-in');
            pcard.classList.add('fade-out');
            document.body.removeEventListener('click', challengeClickListener, false);
            console.log('clicked outside!');
        }
    };
    challengeGallery.addEventListener('click', function () {
        console.log(event);
        if (event.target.id !== "challenge-gallery") {
            var pcard = document.getElementById('challenge-expanded');
            pcard.classList.remove('fade-out');
            pcard.classList.add('fade-in');
            if (lastClass.length > 0) {
                pcard.classList.remove(lastClass);
            }
            if (event.target.id === 'cg-1') {
                pcard.classList.add('challenge-img-1');
                lastClass = 'challenge-img-1';
            } else if (event.target.id === 'cg-2') {
                pcard.classList.add('challenge-img-2');
                lastClass = 'challenge-img-2';
            } else if (event.target.id === 'cg-3') {
                pcard.classList.add('challenge-img-3');
                lastClass = 'challenge-img-3';
            } else if (event.target.id === 'cg-4') {
                pcard.classList.add('challenge-img-4');
                lastClass = 'challenge-img-4';
            } else if (event.target.id === 'cg-5') {
                pcard.classList.add('challenge-img-5');
                lastClass = 'challenge-img-5';
            } else if (event.target.id === 'cg-6') {
                pcard.classList.add('challenge-img-6');
                lastClass = 'challenge-img-6';
            }
            event.stopPropagation();
            document.body.addEventListener('click', challengeClickListener, false);
        }
    }, false);



})();