const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Toggle mobile menu
menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Close menu automatically when clicking a link (σε κινητά)
document.querySelectorAll('.navbar__links').forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    }
  });
});

// Optional: close on scroll
window.addEventListener('scroll', () => {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  }
});
