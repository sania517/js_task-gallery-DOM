'use strict';

const thumbs = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

function handler(e) {
  e.preventDefault();

  const {target} = e;

  const directImage = target.src
    ? target
    : target.querySelector('img');

  largeImage.src = directImage.src.replace('-thumb.jpeg', '.png');
}

thumbs.addEventListener('click', handler);
