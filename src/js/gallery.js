import UnsplashAPI from './UnsplashAPI.js';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import renderingFoo from './renderfoo.js';
import iziToast from 'izitoast';
import icon from '../img/javascript.svg';
import 'izitoast/dist/css/iziToast.min.css';

const api = new UnsplashAPI();

const galleryList = document.querySelector('.gallery');
const container = document.getElementById('tui-pagination-container');
const form = document.querySelector('.js-search-form');
const input = document.querySelector('.search-input');
const loader = document.querySelector('.loader');

const options = {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination(container, options);

const currentPage = pagination.getCurrentPage();

api.getPopularPhotos(currentPage).then(result => {
  galleryList.innerHTML = renderingFoo(result.results);
  pagination.reset(result.total);
});

pagination.on('afterMove', onPaginationOn);

function onPaginationOn(event) {
  const currentPage = event.page;
  api
    .getPopularPhotos(currentPage)
    .then(res => (galleryList.innerHTML = renderingFoo(res.results)));
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue === '') {
    iziToast.info({ message: 'Enter smt for search', iconUrl: icon });
    return;
  }
  api.query = inputValue;
  pagination.off('afterMove', onPaginationOn);
  pagination.off('afterMove', onPaginationSearchByQuery);

  loader.classList.remove('hidden');

  api
    .getPhotosByQuery(currentPage)
    .then(result => {
      galleryList.innerHTML = renderingFoo(result.results);

      pagination.reset(result.total);
    })
    .catch(error => console.log(error))
    .finally(() => {
      loader.classList.add('hidden');
      form.reset();
    });

  pagination.on('afterMove', onPaginationSearchByQuery);
});

function onPaginationSearchByQuery(event) {
  const currentPage = event.page;
  api
    .getPhotosByQuery(currentPage)
    .then(res => (galleryList.innerHTML = renderingFoo(res.results)));
}
