$( document ).ready(function() {
    
    $('#create-link').click(function(){
        
        let id = $('#id').val();
        let text = $('#text').val();
        $.post( 
            "http://localhost:3000/api/create", 
            JSON.stringify(`{"id": ${id}, "text": "${text}"}`)
            // ,function (){
            //     $('#back-link').click();
            // } 
            );        

    });
    
});