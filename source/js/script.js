//навигация без js
var nav = document.querySelector('.navigation');
var toggle = document.querySelector('.navigation__toggle');

nav.classList.remove('navigation--nojs');
nav.classList.add('navigation--closed');

toggle.addEventListener('click', function() {
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  } else {
    nav.classList.add('navigation--closed');
    nav.classList.remove('navigation--opened');
  }
});
//карта без js
var map = document.querySelector('.iframe');
map.classList.remove('iframe--nojs');
