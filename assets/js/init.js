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

// https://materializecss.com/floating-action-button.html#horizontal

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top'
  });
});

// Options
// ____________________________________________________________________________
// Name           | Type	  | Default | Description
// _______________|_________|_________|________________________________________
// direction	    | String	| 'top'	  | Direction FAB menu opens. Can be 'top',
//                |         |         | 'right', 'buttom', 'left'
// _______________|_________|_________|________________________________________
// hoverEnabled	  | Boolean	| true	  | If true, FAB menu will open on hover
//                |         |         | instead of click
// _______________|_________|_________|________________________________________
// toolbarEnabled	| Boolean	| false	  | Enable transit the FAB into a toolbar
//                |         |         | on click
// _______________|_________|_________|________________________________________

// Properties
// ____________________________________________________________________________
// Name	   | Type	   | Description
// ________|_________|_________________________________________________________
// el	     | Element | The DOM element the plugin was initialized with.
// ________|_________|_________________________________________________________
// options | Object	 | The options the instance was initialized with.
// ________|_________|_________________________________________________________
// isOpen  | Boolean | Describes open/close state of the FAB.
// ________|_________|_________________________________________________________
