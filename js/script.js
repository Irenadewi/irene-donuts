// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#logomenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar side bar untuk menghilangkan menu nav
const logomenu = document.querySelector("#logomenu");

document.addEventListener("click", function (e) {
  // Mengecek jika elemen yang diklik bukan hamburger dan bukan navbar
  if (!logomenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.toggle("active");
  }
});
