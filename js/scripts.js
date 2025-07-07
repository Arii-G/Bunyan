
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

function highlightBrand(card) {
  document.querySelectorAll('.brand-card').forEach(c => {
    c.style.background = '#f8fdf8';
    c.style.borderColor = '#90ee90';
  });

  card.style.background = '#e8f5e8';
  card.style.borderColor = '#7dd87d';

  setTimeout(() => {
    card.style.background = '#f8fdf8';
    card.style.borderColor = '#90ee90';
  }, 2000);
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.boxShadow = window.scrollY > 100
    ? '0 2px 20px rgba(0,0,0,0.2)'
    : '0 2px 10px rgba(0,0,0,0.1)';
});

// Burger toggle logic
const burger = document.getElementById("burger");
const nav = document.querySelector("nav ul");
burger.addEventListener("change", () => {
  nav.classList.toggle("nav-open", burger.checked);
});
