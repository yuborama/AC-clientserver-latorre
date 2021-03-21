// import {registrarContacto} from './validaciones.js';

// let alerta = document.querySelector('#btn')

// alerta.addEventListener('click', () => {

//     llenarTablaContactos()

// })


function prueba(){
console.log("hola soy la prueba")
}


/* error del Success-> success es en minuscula */
//recomendacion para el profesor el pedido de datos se hace por GET

function llenarTablaContactos() {
    $.ajax({
        url: "http://localhost/AgendaCS/Servidor/consultar.php",
        data: {},
        cache: false,
        contentType: false,
        processData: false,
        type: "POST",
        success: res => {
            //console.log(res)
            try {
                let data = JSON.parse(res)
                let tr = ""
                data.results.forEach(element => {
                    tr += `
                    <tr>
                        <td>${element.pers_nombre}</td>
                        <td>${element.pers_fijo ? element.pers_fijo : "No tiene"}</td>
                        <td>${element.pers_celular ? element.pers_celular : "No tiene"}</td>
                    </tr>
                    `
                })
                $("#tablaContactos > tr").remove()
                $("#tablaContactos").append(tr)
            } catch (error) {
                toastr.error(error, "Algo ha salido mal")
            }
        }
    })

}