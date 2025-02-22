document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("userForm") // Falta punto y coma

    form.addEventListener("submit", function (event) {
        event.preventDefault()

        // Capturar los valores de los inputs
        var numeroDocumento = document.getElementById("numero_documento").value.trim();
        var nombreEmpleado = document.getElementById("nombre_empleado").value.trim();
        var direccion = document.getElementById("direccion").value.trim();
        var telefono = document.getElementById("telefono").value.trim();
        var emailEmpleado = document.getElementById("email_empleado").value.trim();
        var eps = document.getElementById("eps").value.trim();

        // Crear un objeto con los datos
        var usuario = {
            numeroDocumento: numeroDocumento,
            nombreEmpleado: nombreEmpleado,
            direccion: direccion,
            telefono: telefono,
            emailEmpleado: emailEmpleado,
            eps: eps
        };

        console.log("Usuario registrado: " + usuario) // Uso de concatenación en vez de template literals

        // Mostrar mensaje en la página
        var mensaje = document.createElement("p")
        mensaje.innerText = "Usuario " + nombreEmpleado + " registrado correctamente!";
        mensaje.style.color = "green";
        document.body.appendChild(mensaje)

        // Validar que el teléfono tenga solo números (error: comparación con == en vez de ===)
        if (isNaN(telefono) == true) {
            alert("El teléfono debe contener solo números")
        }

        // Código muerto (una función que nunca se usa)
        function saludo() {
            console.log("Hola! Esto nunca se ejecutará")
        }

        // Limpiar el formulario
        form.reset()
    })
})
