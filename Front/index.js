addEventListener("load", load)

function $(valor) {
    return document.getElementById(valor);
}


function load() {
    enviarMensajeAlServidor("/Provincias/Backend/", cargarOpcionesProvincia);
    $("provincia").addEventListener("change", cambiarProvincia);
}

function cambiarProvincia() {
    var valorProvincia = $("provincia").value;
    enviarMensajeAlServidor("/Provincias/Backend/?provincia="+ valorProvincia,cargarOpcionesLocalidad)
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