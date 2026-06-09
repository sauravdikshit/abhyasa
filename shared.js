/* shared.js – injects nav + footer into inner pages */
(function(){
  const NAV = `
<nav id="navbar">
  <a href="../index.html" class="nav-logo">
    <div class="nav-logo-icon">🌿</div>
    <span class="nav-logo-text">Habit<span>Flow</span></span>
  </a>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="../index.html">Home</a></li>
    <li><a href="about.html">About Us</a></li>
    <li><a href="privacy.html">Privacy Policy</a></li>
    <li><a href="https://sauravdikshit.github.io/abhyasa/#">Data Deletion</a></li>
    <li><a href="feedback.html">Feedback</a></li>
    <li><a href="../index.html#download" class="cta-btn">Get the App</a></li>
  </ul>
</nav>`;

  const FOOTER = `
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <span class="nav-logo-text" style="font-family:'DM Serif Display',serif;display:block;margin-bottom:12px;">Habit<span style="color:var(--accent-gold-light)">Flow</span></span>
      <p>Build better habits, one day at a time.</p>
    </div>
    <div class="footer-col">
      <h4>Pages</h4>
      <a href="../index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="feedback.html">Feedback</a>
    </div>
    <div class="footer-col">
      <h4>Legal</h4>
      <a href="privacy.html">Privacy Policy</a>
      <a href="https://sauravdikshit.github.io/abhyasa/#">Data Deletion</a>
      <a href="mailto:sauravkumar937@gmail.com">Contact</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 HabitFlow. All rights reserved.</p>
    <span class="footer-badge">🌿 Made with intention</span>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', NAV);
  document.body.insertAdjacentHTML('beforeend', FOOTER);

  // Nav scroll + toggle
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 20));
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', () => { toggle.classList.toggle('open'); links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open'); links.classList.remove('open');
  }));

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();
