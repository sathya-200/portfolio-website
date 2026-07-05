// Contact form: prevent real submission (no backend wired up yet) and give the user feedback.
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = contactForm.querySelector('input[type="text"]');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.textContent;

    submitBtn.textContent = "Message sent ✓";
    submitBtn.disabled = true;

    // Replace this with a real email service (e.g. Formspree, EmailJS) when ready to go live.
    console.log("Contact form submitted:", {
      name: nameInput ? nameInput.value : "",
    });

    setTimeout(function () {
      contactForm.reset();
      submitBtn.textContent = originalLabel;
      submitBtn.disabled = false;
    }, 2500);
  });
}

// Highlight the active nav link based on which section is in view.
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  let currentId = "";
  const scrollPos = window.scrollY + 120;

  sections.forEach(function (section) {
    if (section.offsetTop <= scrollPos) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.style.color =
      link.getAttribute("href") === "#" + currentId ? "var(--secondary)" : "";
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);
