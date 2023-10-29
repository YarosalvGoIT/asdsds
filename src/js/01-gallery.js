import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

import { galleryItems } from './gallery-items';
async function foo() {
  const result = await axios.get(
    'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg'
  );
  console.log(result);
}
foo();
const refs = {
  galleryList: document.querySelector('.gallery'),
};

refs.galleryList.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt='${description}'
      />
    </a>
    </li>`
    )
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a');
// lightbox.refresh();
