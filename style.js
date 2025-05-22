const snowman = document.querySelector('.snowman');

// Create a flag to know if it should be up or down
let bounceUp = true;

// Run this code every 500 milliseconds (half a second)
setInterval(() => {
  if (bounceUp) {
    snowman.style.transform = 'translateY(-10px)';
  } else {
    snowman.style.transform = 'translateY(0)';
  }
  bounceUp = !bounceUp; // Flip the bounce direction
}, 500);