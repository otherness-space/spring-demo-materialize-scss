document.addEventListener('DOMContentLoaded', function() {
  var options = {};
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// initialize sidenav
// Please note that the sidenav HTML should not be contained within the navbar HTML.

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

// $(document).ready(function(){
//   $('.sidenav').sidenav();
// });
//---------------------------------------------------------------------//
// (function($){
//   $(function(){
//
//     $('.sidenav').sidenav();
//
//   }); // end of document ready
// })(jQuery); // end of jQuery name space
