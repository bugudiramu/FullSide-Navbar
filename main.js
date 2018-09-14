const nav = document.getElementById('nav');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const transparent = document.getElementById('transparent');
const container = document.getElementById('container');
const main = document.getElementById('main');



openBtn.addEventListener('click', () => {
    nav.style.width = '100%';


})
closeBtn.addEventListener('click', () => {
    nav.style.width = '0px';

})