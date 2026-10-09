// Wait for DOM to load fully
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks1 = document.querySelector('.nav-links1');

  menuToggle.addEventListener('click', () => {
    // Toggles dropdown menu visibility
    navLinks1.classList.toggle('active');
    
    // Toggles hamburger bars into an 'X' icon
    menuToggle.classList.toggle('open');
  });

  // Automatically close menu when a navigation link is tapped
  document.querySelectorAll('.nav-link1 a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });
});