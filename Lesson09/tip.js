$(function(){
   $('#submit').click(function(e){
       e.preventDefault();
       var bill = Number($('#bill').val());
       var percent = Number($('#percent').val()) / 100;
       var tip = bill * percent;
       $('#tip').html("$" + tip.toFixed(2));
   });
});