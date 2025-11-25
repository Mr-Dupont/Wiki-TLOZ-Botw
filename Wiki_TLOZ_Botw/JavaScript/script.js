const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');  // burger -> croix
  navLinks.classList.toggle('show'); // menu visible
  overlay.classList.toggle('active'); // overlay visible
});

// Optionnel : clic sur overlay ferme le menu
overlay.addEventListener('click', () => {
  menuBtn.classList.remove('open');
  navLinks.classList.remove('show');
  overlay.classList.remove('active');
});