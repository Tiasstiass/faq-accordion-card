'use strict';

const container = document.querySelectorAll('.question-container');

container.forEach((el) =>
  el.addEventListener('click', () => {
    if (el.parentNode.classList.contains('active')) {
      el.parentNode.classList.toggle('active');
    } else {
      container.forEach((el) => el.parentNode.classList.remove('active'));
      el.parentNode.classList.add('active');
    }
  })
);