<?php

class Departamento extends Localidad{

    public $numero;

    function __construct($nombre, $numero ){
        $this->nombre = $nombre;
        $this->numero = $numero;
    }

    public function func1(){
        return  parent::func1() + 1;
    }
    public function funcAbst(){
        return 1;
    }
}


?>