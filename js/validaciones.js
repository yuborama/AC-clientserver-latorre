toastr.options.preventDuplicates = true

function registrarContacto() {
    let inpNombre = document.getElementById("txt_nombre")
    let inpTel = document.getElementById("txt_tel_fijo")
    let inpTel2 = document.getElementById("txt_tel_cel")
    if (validarNombre(inpNombre, 1, 40) && validarTelefonos(inpTel, inpTel2, 6, 15)) {
        let data = new FormData()
        data.append("pers_nombre", inpNombre.value)
        data.append("tele_fijo", inpTel.value)
        data.append("tele_celular", inpTel2.value)
        $.ajax({
            url: "http://localhost/AgendaCS/Servidor/registrar.php",
            data,
            cache: false,
            contentType: false,
            processData: false,
            type: "POST",
            success: res => {
                // console.log(res)
                if (res == 1) {
                    toastr.success("Registrado Correctamente', 'Proceso Exitoso")
                    inpNombre.value = ""
                    inpTel.value = ""
                    inpTel2.value = ""
                    llenarTablaContactos()
                }
                else toastr.error(res, "Algo ha salido mal")
            }
        })
    }

}

function validarNombre(input, minLength, maxLength) {
    let nombre = input.value, valid = true
    if (nombre == "") {
        input.focus()
        toastr.warning("Debe digitar un nombre de contacto", "Proceso detenido", { timeout: 2000 })
        valid = false
    } else if (nombre.length < minLength) {
        input.focus()
        toastr.warning(`La cantidad de caracteres mínimos permitidos para el nombre son ${minLength}`, "Proceso detenido", { timeout: 2000 })
        valid = false
    } else if (nombre.length > maxLength) {
        input.focus()
        toastr.warning(`La cantidad de caracteres máximos permitidos para el nombre son ${maxLength}`, "Proceso detenido", { timeout: 2000 })
        valid = false
    }
    return valid
}

function validarTelefonos(input, input2, minLength, maxlength) {
    let telFijo = input.value, telCel = input2.value, valid = true
    if (telFijo == '' && telCel == '') {
        input.focus()
        Command: toastr["warning"]("Debe digitar sus numeros de contactos", "Proceso detenido")
        valid = false
    }
    if (telFijo != "") {
        if (isNaN(telFijo)) {
            input.focus()
            toastr.warning('El teléfono fijo solo puede contener números', 'Proceso detenido', { timeout: 2000 })
            valid = false
        } else if (telFijo.length < minLength) {
            input.focus()
            toastr.warning(`La cantidad de caracteres mínimos permitidos para el teléfono fijo son ${minLength}`, 'Proceso detenido', { timeout: 2000 })
            valid = false
        } else if (telFijo.length > maxlength) {
            input, focus()
            toastr.warning(`La cantidad de caracteres maximo permitidos para el teléfono fijo son ${maxlength}`, 'Proceso detenido', { timeout: 2000 })
            valid = false
        }
    }
    if (telCel != "") {
        if (isNaN(telCel)) {
            input2.focus()
            toastr.warning('El teléfono celular solo puede contener números', 'Proceso detenido', { timeout: 2000 })
            valid = false
        } else if (telCel.length < minLength) {
            input2.focus()
            toastr.warning(`La cantidad de caracteres mínimos permitidos para el teléfono celular son ${minLength}`, 'Proceso detenido', { timeout: 2000 })
            valid = false
        } else if (telCel.length > maxlength) {
            input2.focus()
            toastr.warning(`La cantidad de caracteres máximos permitidos para el teléfono celular son ${maxlength}`, 'Proceso detenido', { timeout: 2000 })
            valid = false
        }
        return valid
    }
}


