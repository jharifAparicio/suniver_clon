/**
 * Mediante ajax, renderizamos la pagina para visualizar BibliotecaVirtual
 * @type type
 */
$('#aBibliotecaVirtual').click(function () {
    $.ajax({
        type: "GET",
        cache: false,
        url: 'biblioteca-virtual',
        success: function (response) {
            $('.site-index').html(response);
        }
    });
});