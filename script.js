const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (scrollY > 80) {
    header.classList.add("backgroundHeader");
  } else {
    header.classList.remove("backgroundHeader");
  }
});

VanillaTilt.init(document.querySelectorAll(".main-card"), {
  scale: 1.1,
  glare: true,
  reverse: true,
  "max-glare": 0.5,
});