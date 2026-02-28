document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const currentItem = button.parentElement;
    const isActive = currentItem.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    // If the clicked item wasn't active, open it
    if (!isActive) {
      currentItem.classList.add('active');
    }
  });
});
