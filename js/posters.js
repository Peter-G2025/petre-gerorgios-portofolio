// posters.js

// ----------------- Mobile Menu -----------------
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLinks = document.querySelectorAll('.navbar__menu .navbar__links');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Κλείνει το mobile menu όταν πατηθεί οποιοδήποτε link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    }
  });
});

// ----------------- Lightbox -----------------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('#lightbox .close');
const galleryImages = document.querySelectorAll('.gallery-item img');

// Άνοιγμα lightbox
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    document.body.style.overflow = 'hidden'; // αποτρέπει scroll πίσω από το overlay
  });
});

// Κλείσιμο lightbox
const closeLightbox = () => {
  lightbox.style.display = 'none';
  document.body.style.overflow = ''; // επαναφορά scroll
};

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
