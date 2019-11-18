
// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
// var grid = document.querySelector('.gallery-grid');
//
// var msnry = new Masonry( grid, {
//   itemSelector: '.gallery-grid-item',
//   columnWidth: '.gallery-grid-sizer',
//   gutter: '.gallery-gutter-sizer',
//   horizontalOrder: true,
//   percentPosition: true
// });

// imagesLoaded( grid ).on( 'progress', function() {
//   // layout Masonry after each image loads
//   msnry.layout();
// });

$(document).ready(function(){
    $('.venobox').venobox({
      infinigall: true,
      numeratio: true,
      overlayClose: false,
      titlePosition: "bottom"
    });

});
