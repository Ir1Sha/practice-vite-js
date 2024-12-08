import axios from 'axios';

export default class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
  #query = "";

  async getPopularPhotos(page) {
    const params = {
      client_id: this.#API_KEY,
      query: 'popular',
      page,
      per_page: 12,
      orientation: 'portrait',
    };
    const result = await axios(this.#BASE_URL, { params });
    return result.data;
  }
  async getPhotosByQuery(page){
    const params = {
      client_id: this.#API_KEY,
      query: this.#query,
      page,
      per_page: 12,
      orientation: 'portrait',
    };
    const result = await axios(this.#BASE_URL, { params });
    return result.data;
  }
  set query(newQuery){
    this.#query = newQuery;
  }
}
