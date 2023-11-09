// accordion
document.querySelector('.accordion').addEventListener('click', (event) => {
  if (event.target.closest('[name="btn"]')) {
    const text = event.target.closest('input').getAttribute('data-click')

    document.querySelectorAll('.catalog[data-open]').forEach(item => {
      item.style.display = 'none';
    })

    document.querySelector(`.catalog[data-open="${text}"]`).style.display = "flex";
  }
})
// / accordion