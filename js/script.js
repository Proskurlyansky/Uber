let btn = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
  btn.classList.toggle('hamburger_active');
});
