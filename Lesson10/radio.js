$(function(){
    $('#choose').on('click', function(){
        var sodaSize = $("input[name='size']:checked").val();
        $('#result').html("You ordered a " + sodaSize + " soda");
    });
});