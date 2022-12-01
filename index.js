const menu = document.querySelectorAll('.menu li');

menu.forEach((link) => {
  const subMenu = link.querySelector('.sub-menu');
  link.addEventListener('click', () => {
    link.classList.toggle('active');
    subMenu.classList.toggle('active-menu');
  });
});
