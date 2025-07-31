function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Contact Modal Functions
function openContactModal() {
  const modal = document.getElementById("contactModal");
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
}

// Footer Modal Functions
function openFooterModal() {
  const modal = document.getElementById("footerModal");
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeFooterModal() {
  const modal = document.getElementById("footerModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeContactModal();
    closeFooterModal();
  }
});

// Handle clicking outside of modals
window.onclick = function(event) {
  const contactModal = document.getElementById("contactModal");
  const footerModal = document.getElementById("footerModal");
  
  if (event.target === contactModal) {
    closeContactModal();
  }
  
  if (event.target === footerModal) {
    closeFooterModal();
  }
}
