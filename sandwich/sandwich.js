$(init);

function init(){
    $('#hideIt').click(hideIt);
    $('#showIt').click(showIt);
    $('#fadeOut').click(fadeOut);
    $('#fadeIn').click(fadeIn);
    $('#addAHeading').click(addAHeading);
    $('#removeAllHeadings').click(removeAllHeadings);
}

function hideIt(){
    $('#sandwich').hide();
}

function showIt(){
    $('#sandwich').show();
}

function fadeOut(){
    $('#sandwich').fadeOut(500);
}

function fadeIn(){
    $('#sandwich').fadeIn(500);
}

function addAHeading(){
    $('body').append("<h3>Hello, sandwich!</h3>");
}

function removeAllHeadings(){
    $('h3').remove();
}