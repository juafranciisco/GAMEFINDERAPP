document.addEventListener('DOMContentLoaded', () => {
  const view1 = document.querySelector('.view1');
  const view2 = document.querySelector('.view2');
  const cardList = document.querySelector('.card-list');

  view1.addEventListener('click', () => {
    cardList.classList.remove('single-column');
  });

  view2.addEventListener('click', () => {
    cardList.classList.add('single-column');
  });
});


