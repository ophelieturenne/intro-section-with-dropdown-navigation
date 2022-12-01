const menu = document.querySelectorAll('.menu li');

menu.forEach((link) => {
  const submenu = document.querySelector('sub-menu');
  link.addEventListener('click', () => {
    link.classList.toggle('active');
  });
});
