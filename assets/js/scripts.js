$(document).ready(function () {
    // Boton con Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // sweet alert al enviar correo
    $('#enviarCorreo').click(function () {
        Swal.fire({
            title: 'Correo Enviado',
            text: 'El correo fue enviado correctamente...',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });
  // sweet alert al Receta agregada
    $('#agregar').click(function () {
        Swal.fire({
            title: 'Listo',
            text: 'Receta agregada',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });

    // Cambiar color del texto a rojo al hacer doble clic en los títulos de Ingredientes y preparación si el titulo esta negro, al hacer click lo cambia a rojo y si está rojo al hacer click lo vuelve a dejar negro.  
    $('h3').on('dblclick', function() {
        var currentColor = $(this).css('color');
        if (currentColor === 'rgb(255, 0, 0)') { // Rojo
            $(this).css('color', 'black');
        } else {
            $(this).css('color', 'red');
        }
    });
    

    // Mostrar y ocultar de las tarjetas en 3 segundos
    $('.card-title').click(function () {
        $('.card-text').toggle(3000);
    });
});