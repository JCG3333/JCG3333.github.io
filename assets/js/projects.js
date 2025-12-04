document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.project-card');

  if (!('IntersectionObserver' in window)) {
    // 혹시 구형 브라우저면 그냥 바로 보이게
    cards.forEach(card => card.classList.add('project-card--visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('project-card--visible');
        obs.unobserve(entry.target);  // 한 번 보인 카드는 관찰 종료
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));
  console.log("테스트");
});
