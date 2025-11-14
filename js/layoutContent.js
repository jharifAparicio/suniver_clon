/**
 * Habilita el BotÃģn para el Cambio de Carrera sÃģlo cuando el select 
 * cambia de valor
 */
$('#selectCarreras').change(function () {
    $('#btnAplicar').prop('disabled', false);
});