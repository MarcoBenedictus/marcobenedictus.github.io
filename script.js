console.log("Welcome to my portfolio ~ Marco");

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// --- Floating Blocks Logic ---
function createFloatingBlocks() {
  const container = document.getElementById('floating-blocks-container');
  if (!container) return;
  
  const blockCount = 20; // Number of blocks

  for (let i = 0; i < blockCount; i++) {
    const block = document.createElement('div');
    block.classList.add('floating-block');

    // Randomize properties
    const size = Math.random() * 60 + 20; // Size between 20px and 80px
    const duration = Math.random() * 10 + 15; // Duration between 15s and 25s
    const delay = Math.random() * 20; // Start delay up to 20s
    const left = Math.random() * 100; // Horizontal start position
    
    block.style.width = `${size}px`;
    block.style.height = `${size}px`;
    block.style.left = `${left}vw`;
    block.style.animationDuration = `${duration}s`;
    block.style.animationDelay = `${delay}s`;

    container.appendChild(block);
  }
}

// Wait for the DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
  // Create the animated background
  createFloatingBlocks();

  // --- Initialize Swiper (Moved from HTML) ---
  // Ensure Swiper is loaded before running this
  if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      /* pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, */
    });
  } else {
    console.error('Swiper JS is not loaded. Make sure the script tag for Swiper is before script.js');
  }
});