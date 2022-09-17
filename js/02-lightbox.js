import { galleryItems } from "./gallery-items.js";

// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";


const refs = {
  gallery: document.querySelector(".gallery"),
};
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /></a>`;
  })
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
