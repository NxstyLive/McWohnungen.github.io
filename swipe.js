let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');

function changeImage(direction) {
  images[currentIndex].classList.remove('active'); // Aktuelles Bild ausblenden

  currentIndex += direction; // Index ändern

  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Zum letzten Bild wechseln
  } else if (currentIndex >= images.length) {
    currentIndex = 0; // Zum ersten Bild zurückkehren
  }

  images[currentIndex].classList.add('active'); // Neues Bild anzeigen
}