$(function() {
    var text = document.querySelector('.textarea');    
    console.log(text.value.length);
    $('.textarea').keyup(function () {
        var text3 = text.value;
        var words = text3.split(" ").length;
        console.log(words);
        $('.total').html(text.value.length);  
        $('.nospace').html(text.value.length);
        $('.words').html(words);
    })
})  