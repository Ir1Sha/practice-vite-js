import UnsplashAPI from './UnsplashAPI.js';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import renderingFoo from './renderfoo.js';

const api = new UnsplashAPI();

const galleryList = document.querySelector('.gallery');
const container = document.getElementById('tui-pagination-container');

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

pagination.on('afterMove', event => {
  const currentPage = event.page;
  api
    .getPopularPhotos(currentPage)
    .then(res => (galleryList.innerHTML = renderingFoo(res.results)));
});
