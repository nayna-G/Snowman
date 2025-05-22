const snowman = document.querySelector('.snowman');

let bounceUp = true;

setInterval(() => {
  snowman.style.transform = bounceUp ? 'translateY(-10px)' : 'translateY(0)';
  bounceUp = !bounceUp;
}, 500);
