document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío real del formulario

    // Capturar los valores de los inputs
    const numeroDocumento = document.getElementById('numero_documento').value.trim();
    const nombreEmpleado = document.getElementById('nombre_empleado').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const emailEmpleado = document.getElementById('email_empleado').value.trim();
    const eps = document.getElementById('eps').value.trim();

    // Crear un objeto con los datos
    const usuario = {
      numeroDocumento,
      nombreEmpleado,
      direccion,
      telefono,
      emailEmpleado,
      eps,
    };

    // Mostrar en la consola
    console.log('Usuario registrado:', usuario);

    // Aquí podrías hacer una petición fetch para enviar los datos a tu backend
    // fetch('URL_DEL_BACKEND', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(usuario)
    // })
    // .then(response => response.json())
    // .then(data => console.log("Respuesta del servidor:", data))
    // .catch(error => console.error("Error en la petición:", error));

    // Limpiar el formulario
    form.reset();
  });
});
