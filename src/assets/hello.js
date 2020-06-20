$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/greeting-javaconfig"
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
       console.log(jqxhr);
    });


    $.ajax({
        contentType: 'application/json',
        data: JSON.stringify({ "command": "on" }),
        dataType: 'json',
        success: function(data){
            app.log("post succeeded");
        },
        error: function(){
            app.log("post failed");
        },
        processData: false,
        type: 'POST',
        url: 'http://localhost:8080/process'
    });
});
