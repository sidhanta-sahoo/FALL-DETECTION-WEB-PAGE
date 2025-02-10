// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger Toggle for Mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Submission (Fake Example)
document.querySelector('form').addEventListener('submit', function (e) {
    // e.preventDefault();
    // Clear the form fields
    setTimeout(()=>{
        this.reset();
    },1000);
});

// Rotating Attract
document.addEventListener("DOMContentLoaded", () => {
    const rotatingElement = document.getElementById("rgb-rotating-element");
  
    // Function to generate random RGB color
    const getRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    };
  
    // Change background color every 500ms
    setInterval(() => {
      rotatingElement.style.backgroundColor = getRandomColor();
      rotatingElement.style.boxShadow = `0 0 10px ${getRandomColor()}`;
    }, 500);
  });

  // Image Mover
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imageContainer = document.querySelector(".img-container");
let allImgs = document.querySelectorAll(".img-container img");
let currentimg = 1;
let timeout;

next.addEventListener("click", function () {
    currentimg++;
    updateimg(currentimg);
    clearTimeout(timeout);
})
prev.addEventListener("click", () => {
    currentimg--;
    updateimg();
    clearTimeout(timeout);
})

updateimg();

function updateimg() {
    if (currentimg > allImgs.length) {
        currentimg = 1;
    }
    else if (currentimg < 1) {
        currentimg = allImgs.length;
    }

    timeout = setTimeout(() => {
        updateimg();
        currentimg++;
    }, 4000)

    imageContainer.style.transform = `translateX(-${420 * (currentimg - 1)}px)`;
    // console.log(currentimg);
    // blinkLight(currentimg);
}

