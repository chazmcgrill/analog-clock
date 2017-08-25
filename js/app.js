var secHand = document.querySelector('.sec-hand'),
    minHand = document.querySelector('.min-hand'),
    hrsHand = document.querySelector('.hr-hand');

function setClock() {
  var sec = new Date().getSeconds(),
      min = new Date().getMinutes(),
      hrs = new Date().getHours();

      if(hrs > 12) {
        hrs = hrs - 12;
      }
      hrs = hrs * 30 + min * 0.5;

  secHand.style.transform = 'rotate(' + sec * 6 + 'deg)';
  minHand.style.transform = 'rotate(' + min * 6 + 'deg)';
  hrsHand.style.transform = 'rotate(' + hrs + 'deg)';
}

setInterval(setClock, 1000);
