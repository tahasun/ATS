// Mobile Navigation

// Hide display mobile navigation menu
// and on screen readers onClick
function showMobileNav() {
  var mobile_nav = document.getElementById("mobile_nav");
  var attr = mobile_nav.attributes;


  if ((mobile_nav.style.display === "none") && (attr['aria-hidden'].value == "true")) {
    mobile_nav.style.display = "block";
    mobile_nav.setAttribute("aria-hidden", "false");
  } else {
    mobile_nav.style.display = "none";
    mobile_nav.setAttribute("aria-hidden", "true");
  }
}

function openNav() {
  var mobile_nav = document.getElementById("mobile_nav");
  var attr = mobile_nav.attributes;

  mobile_nav.style.display = "block";
  mobile_nav.setAttribute("aria-hidden", "false");
}

function closeNav() {
  var mobile_nav = document.getElementById("mobile_nav");
  var attr = mobile_nav.attributes;

  mobile_nav.style.display = "none";
  mobile_nav.setAttribute("aria-hidden", "true");
}

// Hide show hamburger menu on screen readers
function showIcon(screenWidth) {
  var element = document.getElementById("menu_icon");
  var attr = element.attributes;

  if ((screenWidth.matches) && (attr['aria-hidden'].value == "true")) { // If media query matches
    element.setAttribute("aria-hidden", "false");
  } else {
    element.setAttribute("aria-hidden", "true");
  }

}


var screenWidth = window.matchMedia("(max-width: 800px)")
showIcon(screenWidth) // Call listener function at run time
screenWidth.addListener(showIcon) // Attach listener function on state changes
