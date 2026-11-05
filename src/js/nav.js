// Navigation menu toggle & theme interactions
(function () {
  const menuBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('is-open');
      menuBtn.classList.toggle('is-active', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        if (navLinks.classList.contains('is-open')) {
          navLinks.classList.remove('is-open');
          menuBtn.classList.remove('is-active');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
        navLinks.classList.remove('is-open');
        menuBtn.classList.remove('is-active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus();
      }
    });

    // Close when clicking a nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        menuBtn.classList.remove('is-active');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
