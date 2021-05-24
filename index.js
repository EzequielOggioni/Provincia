addEventListener("load", load)
var RutaBackend = "/Provincias/Backend/"

function $(valor) {
    return document.getElementById(valor);
}


function load() {
    enviarMensajeAlServidor(RutaBackend, cargarOpcionesProvincia);
    $("provincia").addEventListener("change", cambiarProvincia);
   $("btnEnviar").addEventListener("click",EnviarDatos);
    
}

function cambiarProvincia() {
    var valorProvincia = $("provincia").value;
    enviarMensajeAlServidor(RutaBackend+"?provincia="+ valorProvincia,cargarOpcionesLocalidad);
    enviarMensajeAlServidor(RutaBackend+"?imagen="+ valorProvincia, function (data){
        $('imagen').src = RutaBackend+data;
});
}


function cargarOpcionesProvincia(valor) {
    var provincias = JSON.parse(valor);
    provincias.sort(function (x, y) { return x.nombre.localeCompare(y.nombre) });
    var opciones = ['<option value=0>Selecciones una provincia</option>']

    provincias.forEach(element => {
        opciones.push('<option value="' + element.valor + '">' + element.nombre + '</option>');
    });

    $("provincia").innerHTML = opciones;
}


function cargarOpcionesLocalidad(valor) {
    var localidades = JSON.parse(valor);
    localidades.sort(function (x, y) { return x.nombre.localeCompare(y.nombre) });
    var opciones = []

    localidades.forEach(element => {
        opciones.push('<option value="' + element.valor + '">' + element.nombre + '</option>');
    });
    $("localidad").innerHTML = opciones;
}





function enviarMensajeAlServidor(servidor, funcionARealizar) {

    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();

    // indico hacia donde va el mensaje
    xmlhttp.open("GET", servidor, true);
    //seteo el evento
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                funcionARealizar(xmlhttp.responseText);
            }
            else {
                alert("ocurrio un error");
            }
        }
    }

 
    //envio el mensaje    
    xmlhttp.send();
}


function EnviarDatos(){
     //declaro el objeto
     var xmlhttp = new XMLHttpRequest();
     var datos = new FormData();
     datos.append("usuario",$("txtUsuario").value);
     datos.append("pass",$("txtPass").value);
     datos.append("archivo",$("archivo").files[0]);
     
     // indico hacia donde va el mensaje
     xmlhttp.open("POST", RutaBackend, true);
     //seteo el evento
     xmlhttp.onreadystatechange = function () {
         //Veo si llego la respuesta del servidor
         if (xmlhttp.readyState == XMLHttpRequest.DONE) {
             //Reviso si la respuesta es correcta
             if (xmlhttp.status == 200) {
                 alert(xmlhttp.responseText);
             }
             else {
                 alert("ocurrio un error");
             }
         }
     }
 
     xmlhttp.setRequestHeader('enctype', 'multipart/form-data');
     //envio el mensaje    
     xmlhttp.send(datos);
}

//#endregion
