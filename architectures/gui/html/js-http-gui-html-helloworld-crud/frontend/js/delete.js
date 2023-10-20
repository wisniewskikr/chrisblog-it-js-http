$( document ).ready(function() {
    
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');
    
    $.get( "http://localhost:3000/api/view/" + id, function( data ) {

        $('#id').val(data.id);
        $('#text').val(data.text);
        
    });

    $('#delete-link').click(function(){

        if(confirm("Are you sure you want to delete this message?")){
            
            let id = $('#id').val();

            $.ajax({
                url: 'http://localhost:3000/api/delete/' + id,
                type: 'DELETE',
                success: function(result) {
                    window.location.replace("http://localhost:3000/");
                }
            });

        }        
        
    });

});