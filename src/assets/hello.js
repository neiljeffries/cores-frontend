$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/api/greeting-javaconfig?name=Mike"
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
       console.log(jqxhr);
    });


    $.ajax({
        contentType: 'application/json',
        data: JSON.stringify({ spinich: "no" , icecream: "yes"}),
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: 'http://localhost:8080/api/process',
        success: function(data){
            console.log("post succeeded");
        },
        error: function(e){
            console.log(e);
        },
    });
});
