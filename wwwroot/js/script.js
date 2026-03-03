const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let autoSlide;

function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
};


 // Function for the next slide button
function nextSlide() {
            
            //Click Next → currentIndex = (0 + 1) % 3 = 1 → Slide2 visible
            //Click Next → currentIndex = (1 + 1) % 3 = 2 → Slide3 visible
            //Click Next → currentIndex = (2 + 1) % 3 = 0 → Slide1 visible again
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    console.log();

        }
        // Function for the previous slide button
function prevSlide() {
            //0	click Prev	(0 - 1 + 3) % 3 = 2	Slide3
            //2	click Prev	(2 - 1 + 3) % 3 = 1	Slide2
            //1	click Prev	(1 - 1 + 3) % 3 = 0	Slide1
currentIndex = (currentIndex - 1 + slides.length) % slides.length;
showSlide(currentIndex);
        }
function startAutoSlide() {
autoSlide = setInterval(nextSlide, 5000);
        }
function resetAutoSlide() {
clearInterval(autoSlide);
startAutoSlide();
}

function stopSlide(){
slides[index].classList.add("active");
    }
    