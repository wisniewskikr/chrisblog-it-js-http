$( document ).ready(function() {
    
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');
    
    $.get( "http://localhost:3000/api/view/" + id, function( data ) {

        alert(data);
        
    });

});