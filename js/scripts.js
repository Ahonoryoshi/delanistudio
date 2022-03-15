$(document).ready(function(){
    $('#des').click(function(){
        $('#des').toggle();
        $('.des').toggle();
    });
    $('.des').click(function(){
        $('#des').toggle();
        $('.des').toggle();
    });


    $('#dev').click(function(){
        $('#dev').toggle();
        $('.dev').toggle();
    });
    $('.dev').click(function(){
        $('#dev').toggle();
        $('.dev').toggle();
    });


    $('#pro').click(function(){
        $('#pro').toggle();
        $('.pro').toggle();
    });
    $('.pro').click(function(){
        $('#pro').toggle();
        $('.pro').toggle();
    });


    $(document).submit(function(event){
        event.preventDefault();
        var myName=$('#name').val();
        var myEmail=$('#email').val();
        alert("Hello " + myName + ", we have received your message, thank you for reaching out to us.")
    })

});