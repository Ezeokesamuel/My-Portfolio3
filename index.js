
  function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerHTML = now.toLocaleTimeString();
  }

  
  updateClock();
  setInterval(updateClock, 1000);


document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    showToast("⚠️ Please fill in all fields!", "error");
  } else {
    showToast("✅ Message sent successfully!", "success");
    this.reset();

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }
});

function showToast(message, type) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast ${type} show`;

  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}
