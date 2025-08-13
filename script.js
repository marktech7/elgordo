/* script.js - Interactive enhancements for El Gordo Website */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', (!expanded).toString());
      mainNav.classList.toggle('active');
    });
    // Close mobile nav when a link is clicked
    document.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Fade-in effect for menu items and gallery
  const elements = document.querySelectorAll('.menu-item, .menu-category, .gallery-grid img');
  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      el.style.opacity = 1;
    }, index * 100);
  });

  // Simple lightbox for gallery images (click to enlarge)
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = 0;
      modal.style.left = 0;
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.background = 'rgba(0,0,0,0.8)';
      modal.style.display = 'flex';
      modal.style.alignItems = 'center';
      modal.style.justifyContent = 'center';
      modal.style.zIndex = 1000;

      const enlargedImg = document.createElement('img');
      enlargedImg.src = img.src;
      enlargedImg.style.maxWidth = '90%';
      enlargedImg.style.maxHeight = '90%';

      modal.appendChild(enlargedImg);
      document.body.appendChild(modal);

      modal.addEventListener('click', () => {
        document.body.removeChild(modal);
      });
    });
  });
});
