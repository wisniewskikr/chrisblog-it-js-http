$( document ).ready(function() {
    
    $.get( "http://localhost:3000/api/", function( data ) {

        if (data.length == 0) {
            displayEmptyMessage();
        } else {
            displayMessagesList(data);
        }
        
    });

});

function displayEmptyMessage() {

    $("#empty").show();
    $("#messages").hide();

    $("#empty").text("There is no messages yet");

}

function displayMessagesList(data) {

    $("#empty").hide();
    $("#messages").show();

    var list = "";
    for(i=0; i<data.length; i++){
        list +="<li>" + data[i].text + "</li>";
    }
    $("#messages").append(list);

}