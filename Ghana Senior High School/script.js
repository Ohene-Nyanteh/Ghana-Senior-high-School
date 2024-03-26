// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
  };
  
  var headerElement = document.getElementById("header"); // Use the correct ID here
  var headerContainer = document.getElementById("navbar");
  let MenuElement =  document.getElementById('menu')

  // Get the point div
  var point = document.getElementById("point");
  
  // Add the sticky class to the nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    // Get the offset position of the nav
    if (window.scrollY >= point.offsetTop) {

      headerElement.classList.add('header-transition');
      headerContainer.classList.add("headertop");
      MenuElement.classList.remove('flex')
      MenuElement.classList.add('hidden')
      console.log('done');
    } else {
      headerElement.classList.remove('header-transition');
      headerContainer.classList.remove("headertop");
      console.log('reversed');
    }
  }



  function openMenu() {


   MenuElement.classList.remove('hidden')
   MenuElement.classList.add('flex')
  }


  function closeNav(){
    let MenuElement =  document.getElementById('menu')

    MenuElement.classList.remove('flex')
    MenuElement.classList.add('hidden')
  }



  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}