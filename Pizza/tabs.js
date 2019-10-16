$(function(){
    $('#tab-container').easytabs();

    $('#summary').on('click', function(){
        var subtotal = 0;
        // determine size of pizza selected
        var size = $('input:checked[name=size]').val();
        // set the base price of the pizza
        if (size == 'small') {
            subtotal = 5;
        }
        if (size == 'medium'){
            subtotal = 10;
        }
        // add $1 for each veggie topping selected
        if ($('#onions').is(':checked')){
            subtotal += 1;
        }
        if ($('#peppers').is(':checked')){
            subtotal += 1;
        }
        $('#subtotal').html(subtotal.toFixed(2));
    });
});