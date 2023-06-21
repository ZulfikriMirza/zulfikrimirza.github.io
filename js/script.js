import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

window.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll(".section");
    var currentSectionIndex = 0;
    var isScrolling = false;
  
    function scrollHandler(event) {
      event.preventDefault(); // Prevent default scrolling behavior
  
      if (!isScrolling) {
        isScrolling = true;
  
        var direction = event.deltaY > 0 ? 1 : -1;
        currentSectionIndex += direction;
  
        if (currentSectionIndex < 0) {
          currentSectionIndex = 0;
        } else if (currentSectionIndex > sections.length - 1) {
          currentSectionIndex = sections.length - 1;
        }
  
        sections[currentSectionIndex].scrollIntoView({
          behavior: "smooth"
        });
  
        setTimeout(function() {
          isScrolling = false;
        }, 1000); // Adjust the delay as needed (in milliseconds)
      }
    }
  
    document.addEventListener("wheel", scrollHandler, { passive: false });
  });
  
  window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
  
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });