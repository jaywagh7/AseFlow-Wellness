function toggleMenu() {
  document.querySelector('.nav__links').classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const contactConfirmation = document.getElementById("confirmationMessage");
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterConfirmation = document.getElementById("newsletterConfirmation");

  // Contact Form Submit
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        contactForm.reset();
        contactConfirmation.textContent = "Thank you! Your message has been sent successfully.";
        contactConfirmation.style.color = "green";
        contactConfirmation.style.display = "block";
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      contactConfirmation.textContent = "Oops! Something went wrong.";
      contactConfirmation.style.color = "red";
      contactConfirmation.style.display = "block";
    }

    setTimeout(() => {
      contactConfirmation.style.display = "none";
    }, 5000);
  });

  // Newsletter Submit
  newsletterForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(newsletterForm);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        newsletterForm.reset();
        newsletterConfirmation.textContent = "Thank you! We'll keep you posted.";
        newsletterConfirmation.style.display = "block";
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      newsletterConfirmation.textContent = "Something went wrong. Try again!";
      newsletterConfirmation.style.color = "red";
      newsletterConfirmation.style.display = "block";
    }

    setTimeout(() => {
      newsletterConfirmation.style.display = "none";
    }, 5000);
  });
});
