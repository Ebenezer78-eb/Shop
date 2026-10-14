// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuToggle.textContent = isOpen ? "✕" : "☰";

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});

// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");

    menuToggle.textContent = "☰";

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// BOOKING BUTTON

const bookingBtn = document.getElementById("bookingBtn");
const bookingNote = document.getElementById("bookingNote");

bookingBtn.addEventListener("click", function () {
  bookingNote.textContent =
    "Welcome to Royal Cuts! Contact the shop to confirm your appointment.";
});
