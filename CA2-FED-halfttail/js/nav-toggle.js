document.querySelectorAll('.navbar').forEach((navbar) => {
  const toggle = navbar.querySelector('.nav-toggle');
  const links = navbar.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('nav-open');
    toggle.classList.toggle('nav-toggle-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('nav-open');
      toggle.classList.remove('nav-toggle-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});
