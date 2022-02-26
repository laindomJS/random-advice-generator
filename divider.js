// CONSTANTS
const divider = document.querySelector('#divider--id');

// EVENT OF THE WINDOW OBJECT
window.addEventListener('load', () => {

    if(window.matchMedia('min-width: 375px')) {
        divider.setAttribute('src', './images/pattern-divider-mobile.svg');
    } 

});