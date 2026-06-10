(function () {
  /* All files are in the same flat directory — no subfolders */
  var NAV =
    '<nav id="navbar">' +
    '  <a href="index.html" class="nav-logo">' +
    '    <div class="nav-logo-icon">🌿</div>' +
    '    <span class="nav-logo-text">Habit<span>Flow</span></span>' +
    '  </a>' +
    '  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">' +
    '    <span></span><span></span><span></span>' +
    '  </button>' +
    '  <ul class="nav-links" id="navLinks">' +
    '    <li><a href="index.html">Home</a></li>' +
    '    <li><a href="about.html">About Us</a></li>' +
    '    <li><a href="privacy.html">Privacy Policy</a></li>' +
    '    <li><a href="data-delete.html">Data Deletion</a></li>' +
    '    <li><a href="feedback.html">Feedback</a></li>' +
    '    <li><a href="index.html#download" class="cta-btn">Get the App</a></li>' +
    '  </ul>' +
    '</nav>';

  var FOOTER =
    '<footer>' +
    '  <div class="footer-inner">' +
    '    <div class="footer-brand">' +
    '      <span class="brand-name">Habit<span>Flow</span></span>' +
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
    '    <p>&copy; 2026 HabitFlow. All rights reserved.</p>' +
    '    <span class="footer-badge">🌿 Made with intention</span>' +
    '  </div>' +
    '</footer>';

  function init() {
    document.body.insertAdjacentHTML('afterbegin', NAV);
    document.body.insertAdjacentHTML('beforeend', FOOTER);

    /* Scroll effect */
    var navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    /* Mobile toggle */
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    /* Close on link click */
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    /* Scroll reveal */
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
