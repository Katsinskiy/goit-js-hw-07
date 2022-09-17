import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.addEventListener("click", onGallaryClick);

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery-item">
  <a href="${original}" class = "gallery__link">
    <img class ="gallery__image" data-source = '${original}' src="${preview}" alt="${description}">
  </a>
</div>`;
  })
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", markup);

const instance = basicLightbox.create(`<img src=''/>`, {
  onShow: () => window.addEventListener("keydown", onEscapePress),
  onClose: () => window.removeEventListener("keydown", onEscapePress),
});

function onGallaryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}

function onEscapePress(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}


