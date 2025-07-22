let stars = document.getElementById("stars1");
let moon = document.getElementById("moon2");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river5");
let boat = document.getElementById("boat6");
let you = document.querySelector(".you");

onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 2 + "px";
  mountains3.style.top = value * 0.5 + "px";
  mountains4.style.top = value / 1.5 + "px";
  river.style.top = value / 3 + "px";
  boat.style.left = value * 3 + "px";
  you.style.fontSize = value + "px";

  if (scrollY >= 68) {
    you.style.fontSize = 69.5999984741211 + "px";
    you.style.position = "fixed";

    if (scrollY >= 470) {
      you.style.display = "none";
    } else you.style.display = "block";
  }
  if (scrollY >= 165) {
    this.document.querySelector(".main").style.background =
      "linear-gradient(rgb(27 156 189), rgb(38 10 112))";
  } else {
    this.document.querySelector(".main").style.background =
      "linear-gradient(rgb(87, 0, 111),rgb(33, 1, 115))";
  }
};
