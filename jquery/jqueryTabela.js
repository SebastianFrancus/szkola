$(document).ready(function(){
        $('#tabela1 tr:even').css('background','#b2aaaa');
        $('#tabela1 tr:odd').css('background','#ede3e3');
        $('#tabela1 tr:first').css('background','red');
        $('#tabela1 tr:last').css('background','lime');
        $('#tabela1 tr:eq(2)').css('background','blue');
        $('#tabela1 tr:eq(2)').css('background','yellow');
               $('tabela1 td:contains("Sól")').css('background', 'brown');
});



