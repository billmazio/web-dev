
function toggleButtonHandler() {


    let toggleMenu = document.querySelector('.toggle-menu');
    let slider = document.querySelector ('.slider');
    let main = document.querySelector ('.main');
    let footer = document.querySelector ('.footer');
    let toggleMenuDisplayStatus = window.getComputedStyle(toggleMenu).getPropertyValue('display');
  
  if (toggleMenuDisplayStatus == "none") {
     toggleMenu.style.display = "block";
     slider.style.display = "none";
     main.style.display = "none";
     footer.style.display = "none";
  } else {
     toggleMenu.style.display = "none";
     slider.style.display = "block";
     main.style.display = "block";
     footer.style.display = "flex";
     } 
  
    
  }