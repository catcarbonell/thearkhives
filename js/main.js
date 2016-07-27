// *** MAIN JS for INDEX & ABOUT PAGES *** //

$(document).ready(function(){

    // MENU hiding
    $('#menu').hide();
    
    // When 'SEARCH' link is clicked, the search bar pops up!
    $('#menu-link').click(function(){

        //console.log('clicky');
        
        $('#menu').slideDown();

    });

    $('#close-link').click(function(){

        //console.log('clicko');
        
        $('#menu').slideUp();

    });



}); //END DOCUMENT READY