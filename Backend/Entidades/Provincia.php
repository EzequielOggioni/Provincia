<?php   

    class Provincia extends Localidad implements IInterfaz{
  
        //atributos
        public $valor;
        public static $cantidad =0;
        public $departamentos;


        //metodos
        public function GetNombre(){
            return $this->nombre;
        }

        public static function RetornarCantidad(){
            return Provincia::$cantidad;
        }

        public function __construct($nombre, $valor){
            parent::__construct();
            $this->nombre = $nombre;
            $this->valor = $valor;
            Provincia::$cantidad++;
        }

        public function funcAbst(){

        }

    public function Metodo2(){} 


    }

?>