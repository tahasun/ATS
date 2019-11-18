var header = document.getElementsByClassName("panel-title");
var i;

for (i = 0; i < header.length; i++) {
  header[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var attr = this.attributes;
    if (attr['aria-expanded'].value == "false"){
      this.setAttribute("aria-expanded", "true");
    } else if (attr['aria-expanded'].value == "true"){
      this.setAttribute("aria-expanded", "false");
    }

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight){ // Collapse Panel
      panel.style.maxHeight = null;
      panel.setAttribute("aria-hidden", "true")
    } else { // Expand Panel
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.setAttribute("aria-hidden", "false")
    }
  });
}
