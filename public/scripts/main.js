let btn = document.getElementById("downButton");
let spans = [];
let interval = 100;
let cursor = false;
let urlBase = "";

//LOAD NAME LETTERS BY INTERVAL

window.onload = function() {
  determineURL();
  console.log(urlBase);

  for (let i = 1; i <= 14; i++) {
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
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 450) {
    console.log(window.location.host, window.location.href);
    btn.className = "";
    btn.classList.add("fas", "fa-chevron-up", "fa-3x");
  } else {
    btn.className = "";
    btn.classList.add("fas", "fa-chevron-down", "fa-3x");
  }
});

btn.addEventListener("click", function() {
  let url = document.URL;
  if (
    url === "/" ||
    url === urlBase + window.location.host.toString() + "/#projects"
  ) {
    window.location.href =
      urlBase + window.location.host.toString() + "/#contact";
  } else {
    window.location.href =
      urlBase + window.location.host.toString() + "/#projects";
  }
});

var determineURL = function() {
  let mode = document.getElementById("mode").innerHTML;
  if (mode === "development") {
    urlBase = "http://";
  } else if (mode === "production") {
    urlBase = "https://";
  }
};
