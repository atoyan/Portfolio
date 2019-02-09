let btn = document.getElementById("downButton");
let spans = [];
let interval = 100;
let cursor = false;

//LOAD NAME LETTERS BY INTERVAL

window.onload = function() {
  for (let i = 1; i <= 8; i++) {
    spans.push(document.getElementById(i.toString()));
  }
  console.log(spans);
  for (let i = 0; i < spans.length; i++) {
    interval += 100;
    setInterval(function() {
      spans[i].hidden = false;
    }, interval);
  }
};

// CHANGE DIRECTION CURSOR BASED ON SCROLL
window.addEventListener("scroll", function() {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 450) {
    btn.className = "";
    btn.classList.add("fas", "fa-chevron-up", "fa-3x");
  } else {
    btn.className = "";
    btn.classList.add("fas", "fa-chevron-down", "fa-3x");
  }
});

btn.addEventListener("click", function() {
  let url = document.URL;
  if (url === "/" || url === "/#projects") {
    window.location.href = "/#contact";
  } else {
    window.location.href = "/#projects";
  }
});
