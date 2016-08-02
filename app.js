$.getJSON("myJSON.js", function(result){
    var cList = $("#myID");
    $.each(result, function(i)
    {
        var li = $('<li/>')
            .addClass('ui-menu-item')
            .attr('role', 'menuitem')
            .text(result[i].name)
            .appendTo(cList);
    });
});
