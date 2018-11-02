$.getJSON("myJSON.js", function(result){
    console.log('done')
    var cList = $("#myID");
    $.each(result, function(i)
    {
        var li = $('<li/>')
            .text(result[i].name)
            .appendTo(cList);
    });
});
