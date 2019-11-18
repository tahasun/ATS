var didScroll;
var lastScrollTop = 0;
// arbitary var
var delta = 5;
var navbarHeight = 160;
// var navbar = document.getElementById("navigation");


// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

// Hide nav When
// 1. User Scrolled more than delta
// 2. user scrolled passed navbar height
// 3 user scrolled up or down
// 4. store the current scroll position in a var
function hasScrolled() {
  // current scroll position
  var current_sp = $(this).scrollTop();

  if (Math.abs(lastScrollTop - current_sp) <= delta){
    return;
  }


  // If current position > last position AND scrolled past navbar...
  if (current_sp > lastScrollTop && current_sp > navbarHeight){
    // Scroll Down
    // navbar.classList.remove("nav-down").add("nav-up");
    $("nav").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    // If did not scroll past the document
    if(current_sp + $(window).height() < $(document).height()) {
      // navbar.classList.remove("nav-up").add("nav-down");
      $("nav").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = current_sp;
}
