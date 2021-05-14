<?php

abstract class Localidad
{
    protected $nombre;

     function __construct($nombre){
        $this->nombre = $nombre;
    }

    abstract function  MostrarValor();

    function mostrarNumero10(){
        return 10;
    }

}


?>