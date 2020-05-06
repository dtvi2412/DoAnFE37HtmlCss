const hambuger = document.querySelector(".hambuger");
const navLinks = document.querySelector(".content__menu");
const links = document.querySelectorAll(".nav-links li");
const login = document.querySelector(".content__right__login");
// const line = document.querySelector(".line");

hambuger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  login.classList.toggle("open");
  //   line.classList.toggle("open");

  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
