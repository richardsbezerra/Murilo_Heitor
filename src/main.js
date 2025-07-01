import './style.css'

// Toggle between themes

// Countdown to December 15
function updateCountdown() {
  const partyDate = new Date('july 12, 2025 13:30:00').getTime();
  const now = new Date().getTime();
  const distance = partyDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
  document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "A festa já começou!";
  }
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

// Flip cards on click for mobile
if (window.innerWidth < 768) {
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(card => {
    card.addEventListener('click', function () {
      this.querySelector('.flip-card-inner').classList.toggle('rotateY-180');
    });
  });
}
