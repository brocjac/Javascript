$(function(){
   $('#book1').change(function(){
       // input book qty
       var qty = Number($('#book1').val());
       // input book price
       var price = Number($('#price1').html());
       // calculate subtotal
       var subtotal = qty * price;
       // display book subtotal
       $('#total1').html(subtotal);
       // input total2
       var total2 = Number($('#total2').html());
       // calc total
       var total = subtotal + total2;
       // display grand total
       $('#total').html(total);
   })
});