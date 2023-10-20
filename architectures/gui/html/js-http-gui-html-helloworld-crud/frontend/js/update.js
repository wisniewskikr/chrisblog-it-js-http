$( document ).ready(function() {
    
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');
    
    $.get( "http://localhost:3000/api/view/" + id, function( data ) {

        $('#id').val(data.id);
        $('#text').val(data.text);
        
    });
    
    $('#update-link').click(function(){
        
        let id = $('#id').val();
        let text = $('#text').val();
        let json = JSON.parse(`{"id": ${id}, "text": "${text}"}`);

        $.put( 
            "http://localhost:3000/api/update", 
            JSON.stringify(json),
            function (data) {
                window.location.replace("http://localhost:3000/");
            }
        );
        
    });
    
});