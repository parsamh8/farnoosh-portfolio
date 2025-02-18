document.addEventListener("DOMContentLoaded", () => {
  // Toggle burger menu on click
  const burgerIcon = document.querySelector('.burger-icon');
  const menu = document.querySelector('.menu');
  burgerIcon.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });

  // Animate gallery items with random fade-in delays for an artistic feel
  const galleryItems = document.querySelectorAll('.gallery-grid .grid-item');
  galleryItems.forEach((item) => {
    const delay = Math.random() * 1000;
    item.style.opacity = 0;
    setTimeout(() => {
      item.style.transition = "opacity 1s ease-in-out";
      item.style.opacity = 1;
    }, delay);
  });

  // Start hero section animations on page load
  animateHeroBg();
  animateHeroText();
});

/**
 * Animate the hero background by adding a class that triggers a CSS keyframe animation.
 */
function animateHeroBg() {
  const hero = document.querySelector('.hero');
  if (hero) {
    // Add the animation class after a short delay
    setTimeout(() => {
      hero.classList.add('animate-bg');
    }, 500);
  }
}

/**
 * Animate the hero title text so each letter appears sequentially with a slight upward motion.
 */
function animateHeroText() {
  const heroTitle = document.querySelector('.hero h1');
  if (!heroTitle) return;
  
  const text = heroTitle.textContent;
  heroTitle.textContent = "";
  
  text.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.opacity = 0;
    span.style.display = "inline-block";
    span.style.transform = "translateY(20px)";
    heroTitle.appendChild(span);
    
    // Stagger each letter's animation
    setTimeout(() => {
      span.style.opacity = 1;
      span.style.transform = "translateY(0)";
      span.style.transition = "all 0.5s ease-out";
    }, 500 + index * 20); // Delay starts after hero background animation begins
  });
}

/**
 * Animate the floating image div to randomly move around the viewport.
 * It calculates a random position that ensures the div remains fully visible,
 * then applies a CSS transition with a bounce-like cubic-bezier effect.
 */
function animateFloatingImage() {
  const floatingDiv = document.getElementById("floating-image");
  if (!floatingDiv) return;
  
  // Get the dimensions of the div
  const divWidth = floatingDiv.offsetWidth;
  const divHeight = floatingDiv.offsetHeight;
  
  // Calculate the maximum X and Y positions so the div stays fully in view
  const maxX = window.innerWidth - divWidth;
  const maxY = window.innerHeight - divHeight;
  
  // Pick random positions within these boundaries
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  
  // Set a random duration between 1 and 3 seconds for a natural feel
  const duration = Math.random() * 2 + 1;
  
  // Apply the transition with a bounce-like easing effect
  floatingDiv.style.transition = `transform ${duration}s cubic-bezier(0.68, -0.55, 0.27, 1.55)`;
  floatingDiv.style.transform = `translate(${randomX}px, ${randomY}px)`;
  
  // Call the function again after the transition is complete
  setTimeout(animateFloatingImage, duration * 1000);
}

// Start the animation when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  animateFloatingImage();
});
