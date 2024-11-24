


var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

menu.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    sideNav.classList.toggle('width');
});
menuBtn.onclick=function(){
    if(sideNav.style.left=="-200px") {
        sideNav.style.left="0px";
        menu.src= "close-icon.png";
    }
    else {
       sideNav.style.left="-200px";
       menu.src= "menu-icon.png";
    }
};


window.onscroll = function() {myFunction();};

var header = document.getElementById("head-wrapper");
var sticky = header.offsetTop;

function myFunction() {
   if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      } else {
      header.classList.remove("sticky");
      }
   }
   
var scroller = document.querySelector(".gallery");
var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");

scroller.addEventListener("wheel", function(evt) {
   evt.preventDefault();
   scroller.scrollLeft += evt.deltaY;
   scroller.style.scrollBehavior = "auto";
   });
   
leftBtn.addEventListener("click", function(evt) {
   scroller.style.scrollBehavior = "smooth";
   scroller.scrollLeft += 1100;
   });
rightBtn.addEventListener("click", function(evt) {
   scroller.style.scrollBehavior = "smooth";
   scroller.scrollLeft += -1100;
   });


$(document).ready(function() {
   $("#team-container").hide();
   });
   
