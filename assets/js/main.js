const dialog = document.getElementById('poster-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');

if (dialog && lightboxImage && lightboxCaption) {
  const triggers = document.querySelectorAll('.poster-trigger');

  for (const trigger of triggers) {
    trigger.addEventListener('click', () => {
      const fullSrc = trigger.dataset.fullSrc;
      const caption = trigger.dataset.caption || '';
      const thumbImg = trigger.querySelector('img');

      if (fullSrc) {
        lightboxImage.src = fullSrc;
      }
      lightboxImage.alt = thumbImg ? thumbImg.alt : caption;
      lightboxCaption.textContent = caption;
      dialog.showModal();
    });
  }

  // Light-dismiss backdrop fallback for browsers that do not yet support closedby="any"
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }
}
