import GalleryMarkupCreator from './gallery-markup-creator.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

/**
 * get gallery ref
 * @type {Element}
 */
const galleryRef = document.querySelector('.gallery');

/**
 * create markup
 */
new GalleryMarkupCreator(galleryRef);

new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
