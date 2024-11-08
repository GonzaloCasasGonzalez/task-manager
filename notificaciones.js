// Verificar si el navegador soporta notificaciones
if ('Notification' in window) {
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
      });
    }
  }

  // Función para mostrar una notificación
  function showNotification() {
    if (Notification.permission === 'granted') {
      // Crear una notificación con título y cuerpo
      const notification = new Notification('¡Hola!', {
        body: 'Esta es una notificación básica.',
        icon: 'https://via.placeholder.com/150'
      });

      // Event listener para la notificación (cuando se haga clic sobre ella)
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
}
