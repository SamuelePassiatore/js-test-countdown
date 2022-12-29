// Recupero elemento in pagina
const display = document.getElementById('display');

// Parto da 5 secondi
let seconds = 10;
display.innerText = seconds;

// Funzione set interval
const countdown = setInterval(() => {
  display.innerText = --seconds;
  if (seconds === 0) {
    display.innerText = 'Happy new year!';
    clearInterval(countdown);
    confetti({
      particleCount: 1000,
      spread: 360
    })
  }
}, 1000);