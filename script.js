const imageTags = document.querySelectorAll("img");
const previewContainer = document.getElementById("image-preview-container");
const previewCloseButton = document.getElementById(
  "preview-container-close-button",
);
const previewImage = document.getElementById("preview");

function displayPreviewContainer() {
  previewContainer.classList.remove("closed");
  document.addEventListener("click", closeOnOutsideClick);
}

function hidePreviewContainer() {
  previewContainer.classList.add("closed");
  document.removeEventListener("click", closeOnOutsideClick);
}

function closeOnOutsideClick(event) {
  console.log("global one getting called");
  if (!previewContainer.contains(event.target)) {
    hidePreviewContainer();
  }
}

hidePreviewContainer();

previewCloseButton.addEventListener("click", () => {
  addImageToPreview("");
  hidePreviewContainer();
});

imageTags.forEach((image) => {
  if (image.dataset.highq) {
    image.addEventListener("click", (e) => {
      e.stopPropagation();
      displayPreviewContainer();
      addImageToPreview(image.dataset.highq);
    });
  }
});

function addImageToPreview(url) {
  previewImage.src = url;
}
