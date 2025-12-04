// main.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Custom JS loaded ✅");

  setupCategoryFilter();
  setupRippleEffect();
});

/**
 * 카테고리 필터링 설정
 * - .filter-btn 에 data-filter 속성 사용
 * - .project-card 에 data-category 속성 사용
 */
function setupCategoryFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  if (!filterButtons.length || !cards.length) {
    console.log("필터용 요소 없음, filter 스킵");
    return;
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter; // ex: "all", "web", "game"

      // active 버튼 표시
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // 카드 필터링
      cards.forEach((card) => {
        const category = card.dataset.category; // ex: "web", "game"

        if (filter === "all" || filter === category) {
          card.classList.remove("project-card-hidden");
        } else {
          card.classList.add("project-card-hidden");
        }
      });
    });
  });
}

/**
 * MDB 비슷한 리플 효과
 * - .btn-mdb, .project-card 클릭 시 원형 물결 생성
 */
function setupRippleEffect() {
  const rippleTargets = document.querySelectorAll(".btn-mdb, .project-card");

  rippleTargets.forEach((el) => {
    el.style.position = el.style.position || "relative";
    el.style.overflow = "hidden";

    el.addEventListener("click", (e) => {
      const rect = el.getBoundingClientRect();
      const ripple = document.createElement("span");

      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.position = "absolute";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.borderRadius = "50%";
      ripple.style.background =
        "radial-gradient(circle, rgba(255,255,255,0.5) 0, rgba(255,255,255,0) 70%)";
      ripple.style.opacity = "0.9";
      ripple.style.transform = "scale(0)";
      ripple.style.pointerEvents = "none";
      ripple.style.transition = "transform 0.45s ease, opacity 0.45s ease";

      el.appendChild(ripple);

      // 강제로 리플 애니메이션 트리거
      requestAnimationFrame(() => {
        ripple.style.transform = "scale(1.8)";
        ripple.style.opacity = "0";
      });

      // 애니메이션 끝난 후 제거
      ripple.addEventListener("transitionend", () => {
        ripple.remove();
      });
    });
  });
}
