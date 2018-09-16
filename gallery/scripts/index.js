// Execute when page is ready
$(document).ready(function(){
    // Make #menu-btn open/close the menu on click
    $('#menu-btn').one('click', openMenu);
    // Have all links in the menu be able to close the menu
    $('a.local-link', $('#main-nav')).on('click', closeMenu);
});

/* FUNCTIONS */
function openMenu(){
    console.log("Open");
    // In order to open the menu, we'll remove and add classes
    $('#page-mask').removeClass('mask-hidden');
    $('#main-nav').addClass('menu-open');
    // Make the menu button turn into an X button
    $('#menu-btn').addClass('menu-cross');
    // Stop the user from being able to scroll
    $('body').css('overflow-y', 'hidden');
    // Make #menu-btn close the menu on click
    $('#menu-btn').one('click', closeMenu);
}

function closeMenu(){
    console.log("Close");
    // In order to open the menu, we'll remove and add classes
    $('#page-mask').addClass('mask-hidden');
    $('#main-nav').removeClass('menu-open');
    // Turn the menu into a regular menu
    $('#menu-btn').removeClass('menu-cross');
    // Allow the user to scroll
    $('body').css('overflow-y', 'scroll');
    // Make #menu-btn open the menu on click
    $('#menu-btn').one('click', openMenu);
    // If the user just clicked on a link to close the menu, then return true
    // to allow the href to activate
    return true;
}