$(function(){
    $('#submit').on('click', function(){
        $('#results').html("");
        if ($('#pancakes').is(':checked')){
            if (!$('#butter').is(':checked') || !$('#syrup').is(':checked')){
                $('#results').html("You need to go to the store");
            } else {
                $('#results').html("You are all set for pancakes");            }

        } else {
            $('#results').html("Are you crazy!")
        }
    });
});