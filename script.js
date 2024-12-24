const dropDown = document.getElementById("drop-down");
const settingCtn = document.getElementById("setting-ctn");
const navMenuClose = document.getElementById("nav-menu-close");

dropDown.addEventListener("click", (event) => {
  settingCtn.style.display = "block";
});

navMenuClose.addEventListener("click", (event) => {
  settingCtn.style.display = "none";
});

const elements = document.querySelectorAll(".change-mode");

elements.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
