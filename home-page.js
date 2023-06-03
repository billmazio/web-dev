document.addEventListener('DOMContentLoaded', function() {
   var toggleButton = document.querySelector('.nav-toggle button');
   var toggleMenu = document.querySelector('.toggle-menu');

   toggleButton.addEventListener('click', function() {
       if (window.innerWidth < 768) {
           toggleMenu.style.display = (toggleMenu.style.display == 'none') ? 'block' : 'none';
       } else {
           toggleMenu.style.display = 'none';
       }
   });

   // Reset the display property of the toggle menu when the window is resized
   window.addEventListener('resize', function() {
       if (window.innerWidth >= 768) {
           toggleMenu.style.display = 'none';
       }
   });

   // var searchForm = document.querySelector('.button form');
   // var searchInput = document.querySelector('#searchInput');

   searchForm.addEventListener('submit', function(event) {
       event.preventDefault(); // prevent the form from submitting
       var query = searchInput.value;
       console.log("Search for: " + query); // print the search query to the console

       // Place your search logic here
   });
});
