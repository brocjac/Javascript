$(function(){
    $('#test').on('click', function(){
        var isValid = $('#form1').validate().form();
        if (isValid){
            // validation passed
            // continue...
        }
    });

    $.extend($.validator.messages,{
        required: "**"
    })
    $('#form1').validate({
        errorClass: "formError",
        rules: {
            age: {
                required: true,
                /*number: true,*/
                digits: true,
                range: [5, 120]
            },
            name: {
                required: true
            },
            email: {
                email: true
            }
        },
        messages: {
            name: {
                required: "YO! Enter a name, or ELSE!"
            }
        }
    });
});