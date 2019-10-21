<?php
$equipos = json_decode(file_get_contents("php://input"));

$localidad = $equipos->localidad;
$mensaje = "Localidad: $localidad";
echo " json_encode($mensaje)";


?>      