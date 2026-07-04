(function() {
  // Enhanced navigation HTML (more attractive & semantic)
  var NAV =
    '<nav id="navbar">' +
    '  <a href="index.html" class="nav-logo">' +
    '    <div class="nav-logo-icon">🌿</div>' +
    '    <span class="nav-logo-text">Abhyasa<span>asa</span></span>' +
    '  </a>' +
    '  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">' +
    '    <span></span><span></span><span></span>' +
    '  </button>' +
    '  <ul class="nav-links" id="navLinks">' +
    '    <li><a href="index.html" data-nav="home">Home</a></li>' +
    '    <li><a href="about.html" data-nav="about">About Us</a></li>' +
    '    <li><a href="privacy.html" data-nav="privacy">Privacy Policy</a></li>' +
    '    <li><a href="data-delete.html" data-nav="delete">Data Deletion</a></li>' +
    '    <li><a href="feedback.html" data-nav="feedback">Feedback</a></li>' +
    '    <li><a href="index.html#download" class="cta-btn">✨ Get the App</a></li>' +
    '  </ul>' +
    '</nav>';

  var FOOTER =
    '<footer>' +
    '  <div class="footer-inner">' +
    '    <div class="footer-brand">' +
    '      <span class="brand-name">Abhyasa<span>App</span></span>' +
    '      <p>Build better habits, one day at a time.</p>' +
    '    </div>' +
    '    <div class="footer-col">' +
    '      <h4>Pages</h4>' +
    '      <a href="index.html">Home</a>' +
    '      <a href="about.html">About Us</a>' +
    '      <a href="feedback.html">Feedback</a>' +
    '    </div>' +
    '    <div class="footer-col">' +
    '      <h4>Legal</h4>' +
    '      <a href="privacy.html">Privacy Policy</a>' +
    '      <a href="data-delete.html">Data Deletion</a>' +
    '      <a href="mailto:sauravkumar937@gmail.com">Contact</a>' +
    '    </div>' +
    '  </div>' +
    '  <div class="footer-bottom">' +
    '    <p>&copy; 2026 Abhyasa. All rights reserved.</p>' +
    '    <span class="footer-badge">🌿 Made with SAURAV DIKSHIT</span>' +
    '  </div>' +
    '</footer>';

  function init() {
    // Inject nav and footer
    document.body.insertAdjacentHTML('afterbegin', NAV);
    document.body.insertAdjacentHTML('beforeend', FOOTER);

    // --- Active link highlight based on current URL ---
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.nav-links a');
    allNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      // Compare current file with link href (handle root, index, and anchor links)
      let linkPath = href.split('#')[0];
      if (linkPath === '') linkPath = 'index.html';
      if (currentPath === linkPath || (currentPath === '' && linkPath === 'index.html')) {
        link.classList.add('active-link');
      }
      // For root domain case
      if ((currentPath === '/' || currentPath === '') && linkPath === 'index.html') {
        link.classList.add('active-link');
      }
    });

    // --- Scroll effect (adds 'scrolled' class) ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    });

    // --- Mobile toggle with body scroll lock and smooth close ---
    const toggle = document.getElementById('navToggle');
    const linksContainer = document.getElementById('navLinks');
    const body = document.body;

    function closeMenu() {
      linksContainer.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      body.classList.remove('menu-open');
    }

    function openMenu() {
      linksContainer.classList.add('open');
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      body.classList.add('menu-open');
    }

    if (toggle) {
      toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (linksContainer.classList.contains('open')) closeMenu();
        else openMenu();
      });
    }

    // Close menu when a nav link is clicked (on mobile)
    const allLinks = document.querySelectorAll('.nav-links a');
    allLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          closeMenu();
        }
        // Optional: smooth scroll for anchor links without page jump
        if (this.getAttribute('href') && this.getAttribute('href').includes('#download')) {
          e.preventDefault();
          const target = document.getElementById('download');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Close menu when clicking outside the navbar (on mobile)
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768 && linksContainer.classList.contains('open')) {
        if (!navbar.contains(e.target)) closeMenu();
      }
    });

    // Re-close on window resize if menu was open (avoid layout glitches)
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && linksContainer.classList.contains('open')) {
        closeMenu();
      }
    });

    // --- Scroll Reveal Animation (same as original but improved) ---
    const revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
