$(document).ready(function(){
    $('#botao-add').click(function(){
        let textoTarefa = $('#add-tarefa').val();
        if (textoTarefa !== "") {
            let novaTarefa = $('<li></li>').text(textoTarefa);
            $('#listaAfazeres').append(novaTarefa);
            $('#add-tarefa').val("");
        }
    });

    $('#listaAfazeres').on('click','li',function(){
        $(this).toggleClass('feito');
    });
});