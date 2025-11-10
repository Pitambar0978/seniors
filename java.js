  // Toggle menu on mobile
 // JavaScript
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle menu on button click
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent immediate close
  mobileMenu.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (mobileMenu.classList.contains("active") && !mobileMenu.contains(e.target) && e.target !== menuToggle) {
    mobileMenu.classList.remove("active");
  }
});

// Close menu when clicking any link
document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

      // Show popup when page loads
    window.onload = function() {
      document.getElementById("welcomePopup").style.display = "block";
    };

    // Close popup
    function closeWelcomePopup() {
      document.getElementById("welcomePopup").style.display = "none";
    }


// Open Modal
  function openModal() {
    document.getElementById("rulesModals").style.display = "block";
  }

  // Close Modal
  function closeModal() {
    document.getElementById("rulesModals").style.display = "none";
  }

  // Close when clicking outside modal
  window.onclick = function(event) {
    let modal = document.getElementById("rulesModals");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  
// pop of hackethon apply now1
  function openModal1() {
    document.getElementById("rulesModals1").style.display = "block";
  }
  function closeModal1() {
    document.getElementById("rulesModals1").style.display = "none";
  }
  // Close when clicking outside modal
  window.onclick = function(event) {
    let modal = document.getElementById("rulesModals1");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // pop of hackethon apply now2
  function openModal2() {
    document.getElementById("rulesModals2").style.display = "block";
  }
  function closeModal2() {
    document.getElementById("rulesModals2").style.display = "none";
  }
  // Close when clicking outside modal
  window.onclick = function(event) {
    let modal = document.getElementById("rulesModals1");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // pop of hackethon apply now3
  function openModal3() {
    document.getElementById("rulesModals3").style.display = "block";
  }
  function closeModal3() {
    document.getElementById("rulesModals3").style.display = "none";
  }
  // Close when clicking outside modal
  window.onclick = function(event) {
    let modal = document.getElementById("rulesModals1");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // gallery tabs
    function showGallery(section) {
      document.getElementById('photos').style.display = 'none';
      document.getElementById('videos').style.display = 'none';
      document.getElementById('youtube').style.display = 'none';
      document.getElementById(section).style.display = 'flex';
    }

    // Loader fade-out effect
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 1000); // 1 second delay before fade out
});
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2,
  d: Math.random() * 0.5,
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00e0ff";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.d;
    if (s.y > canvas.height) s.y = 0;
  });
  requestAnimationFrame(animate);
}
animate();