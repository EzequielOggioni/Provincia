
<?php


function mostrarValor($parametro="Por defecto"){
    echo "<br>";
    echo $parametro;
    return 5;
}


//solo lectura r+
//solo escritura w+ 
//append a+

function EscribirArchivo($path,$texto){
    $arch =  fopen($path, 'a+' );
    //fwrite($arch,$texto);
    fputs($arch,$texto);
 
    fclose($arch);
    copy($path, $texto.'.txt');
    unlink($path);  
 }

 

function LeerArchivo($path){
   $arch =  fopen($path, 'r' );
   while(!feof($arch) ){
       mostrarValor( fgets($arch));
   }
   

   fclose($arch);

}


?>