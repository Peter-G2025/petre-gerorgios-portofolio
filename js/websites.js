// Mobile menu toggle
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  document.body.classList.toggle('menu-open'); // αποφυγή scroll/overlap όταν είναι ανοιχτό το menu
});

// Κλείσιμο menu όταν πατάμε link
document.querySelectorAll('.navbar__links').forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('#lightbox .close');
const galleryImages = document.querySelectorAll('.gallery-item img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    document.body.style.overflow = 'hidden'; // αποφυγή scrolling / overlap με navbar
  });
});

// Close lightbox with X
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  document.body.style.overflow = ''; // επαναφορά scrolling
});

// Close lightbox by clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }
});

// Optional: κλείσιμο με ESC
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.style.display === 'flex') {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }
});
