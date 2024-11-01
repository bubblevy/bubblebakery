function myNav() {
  let bar = document.querySelector(".bar");
  let nav = document.querySelector(".navigation");
  bar.onclick = () => {
    if (nav.style.left == "0%") {
      nav.style.left = "-100%";
      bar.src = "assets/images/others/menu.png";
      document.body.style.overflow = "";
    } else {
      nav.style.left = "0%";
      bar.src = "assets/images/others/x.png";
      document.body.style.overflow = "hidden";
    }
  };
  document.onclick = (event) => {
    if (
      !nav.contains(event.target) &&
      !bar.contains(event.target) &&
      nav.style.left == "0%"
    ) {
      nav.style.left = "-100%";
      bar.src = "assets/images/others/menu.png";
      document.body.style.overflow = "";
    }
  };
}
myNav();

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "F12") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
  }
});
