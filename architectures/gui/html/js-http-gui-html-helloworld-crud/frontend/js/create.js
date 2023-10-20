$( document ).ready(function() {
    
    $('#create-link').click(function(){
        
        let id = $('#id').val();
        let text = $('#text').val();
        let json = JSON.parse(`{"id": ${id}, "text": "${text}"}`);

        $.post( 
            "http://localhost:3000/api/create", 
            JSON.stringify(json),
            function (data) {
                window.location.replace("http://localhost:3000/");
            }
        );
        
    });
    
});