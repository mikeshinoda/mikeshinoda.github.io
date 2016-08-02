var obj = jQuery.parseJSON( '[{ "name": "John" },{"name": "Akshit"}]' );
var cList = $("#myID");
$.each(obj, function(i)
{
    console.log(obj[i].name);
    var li = $('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .text(obj[i].name)
        .appendTo(cList);
});
