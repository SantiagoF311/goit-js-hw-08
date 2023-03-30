// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import simpleLightbox from 'simplelightbox';

const galleryContainer = document.querySelector('ul.gallery');
const photosmarkup = createGalleryItem(galleryItems);

function createGalleryItem(element) {
  return element
    .map(({ preview, original, description }) => {
      return `
            <a class ="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}">
            </a>`;
    })
    .join(' ');
}

galleryContainer.insertAdjacentHTML('beforeend',
  photosmarkup);

const galleryHandler = new simpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
galleryHandler.on('show.simplelightbox');
