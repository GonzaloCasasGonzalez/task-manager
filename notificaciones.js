// Verificar si el navegador soporta notificaciones
if ('Notification' in window) {
  // Función para mostrar el estado de las notificaciones
  function updateStatus() {
    const statusElement = document.getElementById('status');
    if (Notification.permission === 'granted') {
      statusElement.textContent = '¡Las notificaciones están habilitadas!';
      document.getElementById('notifyButton').disabled = false; // Habilitar botón
    } else if (Notification.permission === 'denied') {
      statusElement.textContent = 'Las notificaciones están deshabilitadas.';
      document.getElementById('notifyButton').disabled = true; // Deshabilitar botón
    } else {
      statusElement.textContent = 'Esperando permiso para notificaciones...';
      document.getElementById('notifyButton').disabled = false; // Habilitar botón
    }
  }

  // Función para pedir permiso y mostrar la notificación
  function requestNotificationPermission() {
    // Si no se ha dado permiso aún, pedimos permiso
    if (Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Permiso concedido para notificaciones');
        } else {
          console.log('Permiso denegado para notificaciones');
        }
        updateStatus(); // Actualizar el estado después de la solicitud
      }).catch(err => {
        console.error('Error al solicitar permiso de notificación:', err);
        updateStatus();
      });
    } else {
      updateStatus(); // Actualizar el estado si ya se tiene un permiso
    }
  }

  // Función para mostrar una notificación
  function showNotification() {
    if (Notification.permission === 'granted') {
      const notification = new Notification('¡Hola!', {
        body: 'Esta es una notificación de ejemplo.',
        icon: 'https://via.placeholder.com/150'
      });

      notification.onclick = function () {
        window.open('https://www.ejemplo.com');
      };
    } else {
      console.log('Permiso para notificaciones no concedido.');
    }
  }

  // Evento del botón para mostrar la notificación
  document.getElementById('notifyButton').addEventListener('click', () => {
    showNotification();
  });

  // Solicitar permisos de notificación cuando cargue la página
  requestNotificationPermission();
} else {
  alert('Tu navegador no soporta notificaciones.');
  document.getElementById('notifyButton').disabled = true; // Deshabilitar botón si no soporta notificaciones
}
///otra linea de codigo mas
// Hala Madrid 15