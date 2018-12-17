document.addEventListener('DOMContentLoaded', function() {
  var options = {};
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// (function($){
//   $(function(){
//
//     $('.sidenav').sidenav();
//
//   }); // end of document ready
// })(jQuery); // end of jQuery name space
