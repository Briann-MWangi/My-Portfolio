// Smooth Scrolling for Navigation Links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // Offset for fixed headers
      behavior: "smooth",
    });
  });
});

// Contact Form Validation
const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");

contactForm.addEventListener("submit", e => {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    formResponse.style.display = "block";
    formResponse.style.color = "green";
    formResponse.textContent = "Thank you! Your message has been sent.";
    contactForm.reset(); // Clear the form
  } else {
    formResponse.style.display = "block";
    formResponse.style.color = "red";
    formResponse.textContent = "Please fill out all fields.";
  }
});
