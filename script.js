alert("Veikia");
var burger = document.getElementById("burger");
var sideMenu = document.getElementById("side-menu");

burger.addEventListener("click", openSideMenu);

function openSideMenu(){
  sideMenu.classList.toggle("translateX");
  burger.classList.toggle("rotate");
}

var sideLinks = document.getElementsByClassName('sideLinks');
for (var i = 0; i < sideLinks.length; i++) {
  sideLinks[i].addEventListener("click", openSideMenu);
}

var topLinks = document.getElementsByClassName('topLinks');
for (var i = 0; i < topLinks.length; i++) {
    topLinks[i].addEventListener("click", clicked);
    function clicked(){
      for (var i = 0; i < topLinks.length; i++) {
        topLinks[i].classList.remove("active");
      }
      this.classList.add("active");
    }
}




const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',



  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
  $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});
