$(document).ready(function(){


    function validaForm(){
        // Campos de texto
        if($("input[name=localidad]").val() == ""){
            alert("El campo localidad no puede estar vacío.");
            $("input[name=admon]").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
            return false;
        }
        if($("input[name=lugar]").val() == ""){
            alert("El campo lugar no puede estar vacío.");
            $("input[name=lugar]").focus();
            return false;
        }
        if($("input[name=direccion]").val() == ""){
            alert("El campo direccion no puede estar vacío.");
            $("#input[name=direccion]").focus();
            return false;
        }
        if($("input[name=area]").val() == ""){
            alert("El campo area no puede estar vacío.");
            $("#input[name=area]").focus();
            return false;
        }
        if($("input[name=puesto]").val() == ""){
            alert("El campo puesto no puede estar vacío.");
            $("#input[name=puesto]").focus();
            return false;
        }

    
        return true; // Si todo está correcto
    }

        $("#equiposButton").click( function() {     // Con esto establecemos la acción por defecto de nuestro botón de enviar.
            if(validaForm()){
                console.log("Si funciona el boton")                               // Primero validará el formulario.
                $.post("../PHP/enviar.php",$("#equiposForm").serialize(),function(res){
                    $("#formulario").fadeOut("slow");   // Hacemos desaparecer el div "formulario" con un efecto fadeOut lento.
                    if(res == 1){
                        $("#exito").delay(500).fadeIn("slow");      // Si hemos tenido éxito, hacemos aparecer el div "exito" con un efecto fadeIn lento tras un delay de 0,5 segundos.
                    } else {
                        $("#fracaso").delay(500).fadeIn("slow");    // Si no, lo mismo, pero haremos aparecer el div "fracaso"
                    }
                });
            }
        });
    });