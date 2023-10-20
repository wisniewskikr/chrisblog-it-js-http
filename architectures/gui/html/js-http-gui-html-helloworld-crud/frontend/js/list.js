$( document ).ready(function() {
    
    $.get( "http://localhost:3000/api/", function( data ) {
        var list = "";
        for(i=0; i<data.length; i++){
            list +="<li>" + data[i].text + "</li>";
        }
        $("#messages").append(list);
    });

});