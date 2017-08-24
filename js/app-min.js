var secHand = document.getElementsByClassName('sec-hand')[0],
    minHand = document.getElementsByClassName('min-hand')[0],
    hrsHand = document.getElementsByClassName('hr-hand')[0];

function setClock() {
  var sec = new Date().getSeconds(),
      min = new Date().getMinutes(),
      hrs = new Date().getHours();

      if(hrs > 12) {
        hrs = hrs - 12;
      }
      hrsAngle = hrs * 30 + min * 0.5;

  secHand.style.transform = 'rotate(' + sec * 6 + 'deg)';
  minHand.style.transform = 'rotate(' + min * 6 + 'deg)';
  hrsHand.style.transform = 'rotate(' + hrsAngle + 'deg)';
}

setInterval(setClock, 1000);


