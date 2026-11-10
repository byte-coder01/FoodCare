if (!document.querySelector('link[href="enhanced.css"]')) {
  const enhancedStyles = document.createElement('link');
  enhancedStyles.rel = 'stylesheet';
  enhancedStyles.href = 'enhanced.css';
  document.head.append(enhancedStyles);
}
if (!document.querySelector('link[href="responsive.css"]')) {
  const responsiveStyles = document.createElement('link');
  responsiveStyles.rel = 'stylesheet';
  responsiveStyles.href = 'responsive.css';
  document.head.append(responsiveStyles);
}
if (!document.querySelector('link[href="ux.css"]')) {
  const uxStyles = document.createElement('link');
  uxStyles.rel = 'stylesheet';
  uxStyles.href = 'ux.css';
  document.head.append(uxStyles);
}
if (!document.querySelector('link[href="visibility-fix.css"]')) {
  const visibilityStyles = document.createElement('link');
  visibilityStyles.rel = 'stylesheet';
  visibilityStyles.href = 'visibility-fix.css';
  document.head.append(visibilityStyles);
}
if (!location.pathname.endsWith('index.html') && location.pathname !== '/') {
  const pageStyles = document.createElement('link');
  pageStyles.rel = 'stylesheet';
  pageStyles.href = 'pages.css';
  document.head.append(pageStyles);
}
document.querySelectorAll('a[href="index.html#demo"], a[href="#demo"]').forEach((link) => {
  link.href = 'demo.html';
});
const navForHome = document.querySelector('#site-nav');
if (navForHome && !navForHome.querySelector('a[href="index.html"]')) {
  const homeLink = document.createElement('a');
  homeLink.href = 'index.html';
  homeLink.textContent = 'Home';
  navForHome.prepend(homeLink);
}
const form = document.querySelector('#route-form');
if (form) {
  const message = document.querySelector('#form-message');
  const result = document.querySelector('#route-result');
  const options = { fresh: { route: 'RESCUE', icon: '↗', text: 'Illustrative suggestion: firm tomatoes in good visible condition could be grouped into an affordable basket after an appropriate human check.' }, ripe: { route: 'TRANSFORM', icon: '◒', text: 'Illustrative suggestion: sound, very ripe mangoes could be considered for an appropriately licensed processing partner after an appropriate human check.' }, scraps: { route: 'REGENERATE', icon: '♧', text: 'Illustrative suggestion: peels and clearly inedible plant scraps could be segregated for a composting partner.' } };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const selected = new FormData(form).get('batch');
    if (!selected) { message.textContent = 'Choose a sample batch before viewing a suggestion.'; result.innerHTML = '<span class="result-kicker">Suggested route</span><div class="result-empty"><span>!</span><p>No sample batch selected yet.</p></div>'; return; }
    message.textContent = '';
    const item = options[selected];
    result.innerHTML = `<span class="result-kicker">Illustrative suggested route</span><div class="result-route"><span class="result-icon" aria-hidden="true">${item.icon}</span><h3>${item.route}</h3><p>${item.text}</p></div>`;
  });
}
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
document.body.classList.remove('theme-night');
localStorage.removeItem('foodcare-theme');
if (toggle && nav) {
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('nav-open', !open); toggle.textContent = open ? 'Menu' : 'Close'; });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu'; }));
}
