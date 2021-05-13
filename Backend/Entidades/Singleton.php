 <?php
 
 class Singleton{
    private static $singleton;

    private function __construct(){
            
    }

    public static function GetSingleton(){
        if(!isset($singleton)){
             $singleton =new Singleton(); 
        }
        return $singleton;

    }

    ?>

}