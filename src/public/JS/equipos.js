$(document).ready(function(){

    $('#form').on('submit', function(e) {
        var form = this;
        e.preventDefault();
        Swal.fire({
            title: 'Quieres enviar esta información?',
            text: "Los datos que envíes serán utilizados para llenar el formato de reubicación!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, envíalo!',
            cancelButtonText: 'Cancelar',
            closeOnConfirm: true,
            closeOnCancel: true
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Hecho!',
                    'Tus datos han sido enviados correctamente',
                    'success'
                )
                form.submit();
            }
        });
    });   
});

