// First, add Hammer.js to your HTML:
// <script src="https://hammerjs.github.io/dist/hammer.min.js"></script>

document.addEventListener('DOMContentLoaded', function() {
  // ===== CAROUSEL FUNCTIONALITY =====
  const carousel = document.querySelector('.food-items-section');
  const prevBtn = document.querySelector('.nav-prev');
  const nextBtn = document.querySelector('.nav-next');
  const foodItems = document.querySelectorAll('.food-item');
  
  // Initialize item width for navigation
  const itemWidth = foodItems[0].offsetWidth + 20; // width + gap
  const visibleItems = 3;
  let scrollStep = itemWidth * visibleItems;
  
  // Arrow button navigation (exactly 3 items per click)
  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });
  
  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
  });
  
  // Add hover effect to arrows as per specifications
  prevBtn.addEventListener('mouseenter', () => {
    prevBtn.style.transform = 'translateX(-50%) scale(1.05)';
    prevBtn.style.backgroundColor = '#0ea271';
  });
  
  prevBtn.addEventListener('mouseleave', () => {
    prevBtn.style.transform = 'translateX(-50%)';
    prevBtn.style.backgroundColor = '#10b981';
  });
  
  nextBtn.addEventListener('mouseenter', () => {
    nextBtn.style.transform = 'translateX(50%) scale(1.05)';
    nextBtn.style.backgroundColor = '#0ea271';
  });
  
  nextBtn.addEventListener('mouseleave', () => {
    nextBtn.style.transform = 'translateX(50%)';
    nextBtn.style.backgroundColor = '#10b981';
  });

  // Make sure it recalculates width on resize
  window.addEventListener('resize', () => {
    const newItemWidth = foodItems[0].offsetWidth + 20;
    scrollStep = newItemWidth * visibleItems;
  });
  
  // ===== HAMMER.JS SWIPE FUNCTIONALITY =====
  if (typeof Hammer !== 'undefined') {
    // Initialize Hammer
    const hammertime = new Hammer(carousel);
    
    // Configure Hammer to detect horizontal swipes
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    
    // Listen for swipe events
    hammertime.on('swipeleft', function() {
      console.log('Swiped left - showing next items');
      carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });
    
    hammertime.on('swiperight', function() {
      console.log('Swiped right - showing previous items');
      carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });
  }
});