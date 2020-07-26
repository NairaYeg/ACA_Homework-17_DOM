const sliderImgs = document.querySelectorAll('.slide')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
let current = 0

const reset = () =>{
    for (let i = 0; i < sliderImgs.length; i++) {
      sliderImgs[i].style.display = "none";
    }
  }

const startSlide = () =>{
    reset();
    sliderImgs[0].style.display = "block";
  }

const slideLeft = () => {
    reset();
    sliderImgs[current - 1].style.display = "block";
    current--;
  }

const slideRight = () =>{
    reset();
    sliderImgs[current + 1].style.display = "block";
    current++;
  }

arrowLeft.addEventListener("click", function() {
    clearInterval(id)
    if (current === 0) {
      current = sliderImgs.length;
    }
    slideLeft();
  });

arrowRight.addEventListener("click", function () {
    clearInterval(id)
    if (current === sliderImgs.length - 1) {
      current = -1;
    }
    slideRight();
  });

let id = setInterval(()=>{
    if (current === sliderImgs.length - 1) {
      current = -1;
    }
    slideRight();
  }, 3000)

startSlide();