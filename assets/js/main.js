// main.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Custom JS loaded ✅");

  // 카드에 간단한 인터랙션 예시 (나중에 네가 원하는 JS로 교체하면 됨)
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // 카드 클릭 시 콘솔에 어떤 카드인지 출력
      const title = card.querySelector(".card-title")?.textContent?.trim();
      console.log(`카드 클릭: ${title}`);
    });
  });
});
