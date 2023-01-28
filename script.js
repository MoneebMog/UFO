const ufo = document.getElementById('ufo');
const cows = document.querySelectorAll('.cow');


document.addEventListener('mousemove', (event) => {
  ufo.style.left = event.clientX - 50 + 'px';  // -25 to center the UFO on the cursor
  ufo.style.top = event.clientY - 25 + 'px';  // -25 to center the UFO on the cursor
});

ufo.addEventListener('click', () => {
  cows.forEach((cow) => {
    cow.style.top = parseInt(cow.style.top) - 10 + 'px';
    if(parseInt(cow.style.top) < parseInt(ufo.style.top) && parseInt(cow.style.left) < parseInt(ufo.style.left) + 50 && parseInt(cow.style.left) > parseInt(ufo.style.left)){
      cow.style.display = "none";
    }
  });
});



