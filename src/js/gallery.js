import UnsplashAPI from './UnsplashAPI.js';
import renderingFoo from './renderfoo.js';

const api = new UnsplashAPI();

const galleryList = document.querySelector('.gallery');

api
  .getPopularPhotos(1)
  .then(result => (galleryList.innerHTML = renderingFoo(result.results)));
