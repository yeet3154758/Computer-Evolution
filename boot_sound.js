function playBootSound() {
  const bootSound = new Audio("sound/boot.mp3");
  bootSound.volume = 1.0;
  if (window.sound) {
    bootSound.play().catch(err => console.warn(err));
  }
}

