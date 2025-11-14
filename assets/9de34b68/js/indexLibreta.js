/**
 * Mediante Ajax llama al metodo Contenido Libreta que renderiza y muestra la
 * libreta para la gestion elegida.
 * @returns {undefined}
 */
$(function () {
    $('#tabsGestiones').tabs({
        activate: function (event, ui) {
            var gestion = (ui.newPanel[0].id).trim();
            if (gestion.indexOf('/')) {
                var id = ('#div' + gestion.replace('/', '-'));
            } else {
                var id = ('#div' + gestion);
            }
            var gestionA = $("#tabsGestiones .ui-tabs-active").text().trim();
            $("#gestionActual").val(gestionA);
            if ($(id).html() == "") {
                $.ajax({
                    type: "GET",
                    url: 'contenido-libreta',
                    data: { 'gestion': gestion },
                    success: function (response) {
                        $(id).html(response);
                        $("#gestionActual").val(gestion);
                    }
                });
            }
        }
    });
});

/**
 * MÃ©todo que hace submit del formulario para la impresion del PDF
 */
$('#btnImprimir').click(function () {
    document.getElementById("formGestionLibreta").submit();
});