import SimpleLightbox from 'simplelightbox';
import Player from '@vimeo/player';
import 'simplelightbox/dist/simple-lightbox.min.css';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
import { galleryItems } from './gallery-items';
console.log(SimpleLightbox);
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

const { email, message } = evt.target.elements;

const formData = {};

formData[event.target.name] = event.target.value;
