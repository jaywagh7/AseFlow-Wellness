function toggleMenu() {
  document.querySelector('.nav__links').classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmationMessage");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default submission

    const formData = new FormData(form);

    // Add your Web3Forms Access Key here (if not already added as a hidden input)
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        form.reset();
        confirmation.textContent = "Thank you! Your message has been sent successfully.";
        confirmation.style.color = "green";
        confirmation.style.display = "block";
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      confirmation.textContent = "Oops! Something went wrong.";
      confirmation.style.color = "red";
      confirmation.style.display = "block";
    }

    setTimeout(() => {
      confirmation.style.display = "none";
    }, 5000);
  });
});
