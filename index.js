(function () {

    var challengeGallery = document.getElementById('challenge-gallery');
    var lastClass = "";

    challengeGallery.addEventListener('click', function () {
        console.log(event);
        var pcard = document.getElementById('challenge-expanded');
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

    }, false);

})();