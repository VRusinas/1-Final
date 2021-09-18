
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

//page transition animation 1s
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

  const inputValue_name = document.getElementById('inputValue_name');
  const inputValue_srname = document.getElementById('inputValue_srname');
  const inputValue_phone = document.getElementById('inputValue_phone');
  const inputValue_name2 = document.getElementById('inputValue_name2');
  const inputValue_srname2 = document.getElementById('inputValue_srname2');
  const inputValue_phone2 = document.getElementById('inputValue_phone2');

  function validacija(){
    if(inputValue_name.value == "")
    {
    alert("Neįvėdete savo vardo.");
  }
  else if (inputValue_srname.value == "")
  {
      alert("Neįvėdete savo pavardes.");
  }
  else if(inputValue_phone.value == "")
  {
    alert("Neįvėdete savo telefono numerio.");
  }
  else{
    document.getElementById('monthly').checked = true;
    inputValue_name.value = "";
    inputValue_srname.value = "";
    inputValue_phone.value = "";
    alert("Forma sukurta.")
  }
}
  function validacija2(){
    if(inputValue_name2.value == "")
    {
    alert("Neįvėdete savo vardo.");
  }
  else if (inputValue_srname2.value == "")
  {
      alert("Neįvėdete savo pavardes.");
  }
  else if(inputValue_phone2.value == "")
  {
    alert("Neįvėdete savo telefono numerio.");
  }
  else{
    document.getElementById('Personal').checked = true;
    inputValue_name2.value = "";
    inputValue_srname2.value = "";
    inputValue_phone2.value = "";
    alert("Forma sukurta.")
  }
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active2", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active2";

}
document.getElementById("defaultOpen").click();


//hover
$('.hover').mouseover(function() {
  $('.text').css("visibility","visible");
});

$('.hover').mouseout(function() {
  $('.text').css("visibility","hidden");
});
