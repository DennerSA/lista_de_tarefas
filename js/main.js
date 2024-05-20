$(document).ready(function() {
    $('#atividade-form').on('submit', function(event) {
        event.preventDefault();
        
        var task = $('#atividade').val();
        
        $('#tarefas-lista').append('<li>' + task + '</li>');
        
        $('#atividade').val('');
    });
    
    $('#tarefas-lista').on('click', 'li', function() {
        $(this).toggleClass('completo');
    });
});
