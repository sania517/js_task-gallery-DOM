'use strict';

const thumbs = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

function handler(e) {
  event.preventDefault();

  const directImage = e.target.src
    ? e.target
    : e.target.querySelector('img');

  largeImage.src = directImage.src.replace('-thumb.jpeg', '.png');
}

thumbs.addEventListener('click', handler);
