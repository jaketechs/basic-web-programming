let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById('theme-switch')

const enablelightmode = () => {
  document.body.classList.add('lightmode')
  localStorage.setItem('lightmode', 'active')
}

const disablelightmode = () => {
  document.body.classList.remove('lightmode')
  localStorage.setItem('lightmode', null)
}

if(lightmode === "active") enablelightmode()

themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem('lightmode')
  lightmode !== "active" ? enablelightmode() : disablelightmode()
})
//menambahkan lightmode 

const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideindex].classList.add("displaySlide");
        intervalid = setInterval(nextSlide, 5000); // Slide otomatis tiap 5 detik
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideindex = 0;
    } else if (index < 0) {
        slideindex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideindex].classList.add("displaySlide");
}

function nextSlide() {
    slideindex++;
    showSlide(slideindex);
}

function prevSlide() {
    slideindex--;
    showSlide(slideindex);
}
//sliderlogic

