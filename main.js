const nav = document.getElementById('nav');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const transparent = document.getElementById('transparent');
const container = document.getElementById('container');
const main = document.getElementById('main');
// const dropdown = document.getElementById('dropdown');
// const dropdownBtn = document.getElementById('dropdownBtn');

openBtn.addEventListener('click', () => {
    nav.style.width = '100%';
})
closeBtn.addEventListener('click', () => {
    nav.style.width = '0px';
})
// dropdownBtn.addEventListener('click', () => {
//     dropdown.style.display = 'none'
// })
// dropdownBtn.addEventListener('click', () => {
//     dropdown.style.display = 'block'
// })