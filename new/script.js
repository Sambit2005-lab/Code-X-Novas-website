document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".letter");
  
    document.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
  
      letters.forEach((letter, index) => {
        const triggerPoint = windowHeight * (index / 15); // Adjust this value for proper timing
        if (scrollPosition > triggerPoint) {
          letter.classList.add("active");
        } else {
          letter.classList.remove("active");
        }
      });
    });
  });