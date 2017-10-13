$(document).ready(function(){
    $('#tlo1').click(function(){
        $('#akapit').addClass('tlo1');

    })
});

$(document).ready(function(){
    $('#tlo2').click(function(){
        $('#akapit').addClass('tlo2');
    })
});

$(document).ready(function(){
    $('#brak').click(function(){
        $('#akapit').removeClass();
    })
});

$(document).ready(function(){
    $('#testTlo1').click(function(){
        $('#akapit').hasClass('tlo1');
    })
});


