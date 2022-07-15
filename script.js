$(function(){
    // this will get the full URL at the address bar
    var url = window.location.href; 

    // passes on every "a" tag 
    $(".navbar-nav a").each(function() {
        // checks if its the same on the address bar
        if(url == (this.href)) { 
        $(this).closest("a").addClass("active");
        }
    });
});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {addStickyClass()};
// Get the header
var header = document.getElementById("myTopnav");
var spanLetterTohidde = document.querySelectorAll('.state-short')
var spanLetterTohiddeDef = document.querySelectorAll('.state-def')
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addStickyClass() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-top", "top-clr");
    spanLetterTohidde.forEach(el => {el.classList.add('opac-0'); el.classList.remove('opac-1')})
    spanLetterTohiddeDef.forEach(el => {el.classList.remove('opac-0'); el.classList.add('opac-1')})

  } else {
    header.classList.remove("sticky-top", "top-clr");
    spanLetterTohidde.forEach(el => {el.classList.remove('opac-0');el.classList.add('opac-1') })
    spanLetterTohiddeDef.forEach(el => {el.classList.add('opac-0'); el.classList.remove('opac-1')})

  }
} 


