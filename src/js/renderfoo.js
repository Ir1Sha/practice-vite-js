export default function renderingFoo(arr) {
  return arr
    .map(result => {
      return `<li class="gallery__item"><img class="gallery-img" src="${result.urls.small}" alt="${result.alt_description}"></img></li>`;
    })
    .join('');
}
