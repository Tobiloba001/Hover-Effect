"use strict";

const panels = document.querySelectorAll(".panel");

panels.forEach((t) => {
  t.addEventListener("mouseover", function () {
    removeActive();
    t.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((t) => {
    t.classList.remove("active");
  });
}
