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
        list += `<input type='radio' name='messages' value='${data[i].id}' onclick='handleRadioClick()'>${data[i].text}</input></br>`;
    }
    $("#messages").append(list);

}

function handleRadioClick() {

    $("#menu-texts").hide();
    $("#menu-links").show(); 
    
    let id = $('input[type="radio"]:checked').val();
    $("#view-link").attr("href", "http://localhost:3000/view?id=" + id);
    $("#create-link").attr("href", "http://localhost:3000/create");
    $("#update-link").attr("href", "http://localhost:3000/update?id=" + id);
    $("#delete-link").attr("href", "http://localhost:3000/delete?id=" + id);
    
}