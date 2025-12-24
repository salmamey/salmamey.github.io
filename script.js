// ===== SIDEBAR NAV =====
const menuItems = document.querySelectorAll(".menu li");
const pages = document.querySelectorAll(".page");

menuItems.forEach(item => {
  item.addEventListener("click", () => {

    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const target = item.getAttribute("data-target");

    pages.forEach(page => {
      page.classList.remove("active");
      if (page.id === target) {
        page.classList.add("active");
      }
    });
  });
});

// ===== WORK WITH ME BUTTON =====
const workBtn = document.querySelector(".btn-work");

if (workBtn) {
  workBtn.addEventListener("click", () => {

    // aktifkan menu Kontak
    menuItems.forEach(i => i.classList.remove("active"));
    const kontakMenu = document.querySelector('[data-target="kontak"]');
    kontakMenu.classList.add("active");

    // tampilkan halaman Kontak
    pages.forEach(page => {
      page.classList.remove("active");
      if (page.id === "kontak") {
        page.classList.add("active");
      }
    });
  });
}
