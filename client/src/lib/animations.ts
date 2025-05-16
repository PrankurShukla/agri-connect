export function initAnimations() {
  // Fade-in animation on scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const checkFade = () => {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  };
  
  // Initial check on load
  checkFade();
  
  // Check on scroll
  window.addEventListener('scroll', checkFade);
  
  // Clean up event listener when component unmounts
  return () => {
    window.removeEventListener('scroll', checkFade);
  };
}
