document.addEventListener("DOMContentLoaded", () => {
  // Select all FAQ items
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const questionButton = item.querySelector(".faq-question");

    questionButton.addEventListener("click", () => {
      // Check if the clicked item is already open
      const isActive = item.classList.contains("active");

      // 1. Close all FAQ items first
      faqItems.forEach(faq => {
        faq.classList.remove("active");
      });

      // 2. If the clicked item was NOT active, open it
      // (If it was active, step 1 already closed it, allowing users to collapse all)
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});

