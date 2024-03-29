const burgerIcon = document.querySelector('.hamburger-icon');
const overlay = document.querySelector('.nav-overlay');
const mobileContact = document.querySelector('.mobile-contact');

let overlayOn = false;

burgerIcon.addEventListener('click', () => {
    toggleOverlay();
})

mobileContact.addEventListener('click', () => {
    toggleOverlay();
})

function toggleOverlay() {
    if (overlayOn) {
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = 0;
        enableScroll();
    } else {
        overlay.style.visibility = 'visible';
        overlay.style.opacity = 1;
        disableScroll();
    }
    overlayOn = !overlayOn;
}

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

