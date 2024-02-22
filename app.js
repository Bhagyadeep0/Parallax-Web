let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let bigLand = document.getElementById("bg-land");
let midLand = document.getElementById("mid-land");
let landGlow = document.getElementById("landscape-glow");
let foreLand = document.getElementById("fore-land");
let moonGlow = document.getElementById("moon-glow");
let text = document.getElementById("text");


let stopPosition = 600;

window.addEventListener("scroll", () => {
  let currentPosition = window.scrollY || window.pageYOffset;

  let scroll = window.scrollY;
  stars.style.left = scroll * 0.1 + "px";
  moon.style.top = scroll * 1.2 + "px"


  if (currentPosition > stopPosition) {
    // If so, hide the moon
    moon.style.display = 'none';
    moonGlow.style.display = 'none';
  } else {
    // Otherwise, make sure it's visible
    moon.style.display = 'block';
    moonGlow.style.display = 'block';
  }
  moonGlow.style.top = scroll * 1.2 + "px";
  moonGlow.style.zIndex = "-8";
  bigLand.style.top = scroll * 0.5 + "px";
  midLand.style.top = scroll * 0.35 + "px";
  landGlow.style.top = scroll * 0.2 + "px";
  foreLand.style.top = scroll * 0.2 + "px";
  text.style.marginRight = scroll * 4 + "px";
  text.style.marginTop = scroll * 1.2 + "px";
});