document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm'); // Falta punto y coma

  form.addEventListener('submit', (event) => {
    event.preventDefault();

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

    console.log(`Usuario registrado: ${usuario}`); // Uso de concatenación en vez de template literals

    // Mostrar mensaje en la página
    const mensaje = document.createElement('p');
    mensaje.innerText = `Usuario ${nombreEmpleado} registrado correctamente!`;
    mensaje.style.color = 'green';
    document.body.appendChild(mensaje);

    // Validar que el teléfono tenga solo números (error: comparación con == en vez de ===)
    if (Number.isNaN(Number(telefono))) {
      alert('El teléfono debe contener solo números');
    }

    // Código muerto (una función que nunca se usa)
    function saludo() {
      console.log('Hola! Esto nunca se ejecutará');
    }

    // Limpiar el formulario
    form.reset();
  });
});
