document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel') as HTMLElement;
    const prevButton = document.getElementById('prev') as HTMLButtonElement;
    const nextButton = document.getElementById('next') as HTMLButtonElement;
    
    let currentIndex = 0;
    const items = carousel.children;
    const totalItems = items.length;
    const visibleItems = 3; // Number of items visible at a time
  
    const updateCarousel = () => {
      const offset = -currentIndex * 100 / visibleItems;
      carousel.style.transform = `translateX(${offset}%)`;
    };
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - visibleItems;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < totalItems - visibleItems) ? currentIndex + 1 : 0;
      updateCarousel();
    });
  
    updateCarousel(); // Initialize carousel
  });