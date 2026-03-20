function moveSlide(btn, direction) {
  const track = btn.parentElement.querySelector('.carousel-track');
  const slides = track.querySelectorAll('.carousel-slide');
  let current = [...slides].findIndex(s => s.classList.contains('active'));
  slides[current].classList.remove('active');
  current = (current + direction + slides.length) % slides.length;
  slides[current].classList.add('active');
}