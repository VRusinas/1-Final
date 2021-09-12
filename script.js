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
