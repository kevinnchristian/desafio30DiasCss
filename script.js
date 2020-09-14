const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (scrollY > 80) {
    header.classList.add('backgroundHeader');
  } else {
    header.classList.remove('backgroundHeader');
  }
})


