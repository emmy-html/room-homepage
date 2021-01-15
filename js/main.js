function hamburger() {
    // declare all variables
    var menu = document.getElementById("menu"); // use the DOM to access the navigation menu
    var hamburger = document.getElementById("menu-toggle-button"); // use the DOM to access the hamburger button
    if (menu.style.display !== 'block') { // if the menu is hidden, then display it
        menu.style.display = 'block';
        menu.classList.add('fade-in'); // add a fade effect when menu appears on screen
        hamburger.classList.remove('hamburger-button'); // remove the 'hamburger' icon
        hamburger.classList.add('close-button'); // add the 'close' symbol
    } else { 
        menu.style.display = 'none'; // if the menu is open, hide it again
        hamburger.classList.remove('close-button'); // remove the 'close' symbol
        hamburger.classList.add('hamburger-button'); // replace it with the hamburger icon again
    }
}