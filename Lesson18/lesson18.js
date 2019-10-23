$(function(){
   $('input[type="radio"]').on('click', function(){
       var color = $('input:checked[name=color]').val();
       switch (color)
       {
           case "red":
               $('#message').html("You should try strawberry ice cream");
               break;
           case "blue":
               $('#message').html("You should try blue raspberry ice cream");
               break;
           default:
               $('#message').html("You should try " + color + " ice cream");
       }
   });
});