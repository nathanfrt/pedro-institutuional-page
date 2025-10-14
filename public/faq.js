window.toggleFaq = function (clicked) {
  const allItems = document.querySelectorAll('.item');

  allItems.forEach(item => {
    const answer = item.querySelector('.answer');
    const icon = item.querySelector('.toggle-icon');
    if (item.querySelector('.question') !== clicked) {
      answer.classList.remove('show');
      icon.textContent = '⮟';
    }
  });

  const answer = clicked.nextElementSibling;
  const icon = clicked.querySelector('.toggle-icon');

  const isOpen = answer.classList.contains('show');
  answer.classList.toggle('show');
  icon.textContent = isOpen ? '⮟' : '—';
};
