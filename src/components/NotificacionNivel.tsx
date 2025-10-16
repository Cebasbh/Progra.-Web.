
import './NotificacionNivel.css';

const NotificacionNivel = () => {
  return (
    <div className="notificacion-container">
      <h4>¡Felicidades!</h4>
      <div className="notificacion-alert" role="alert">
        Has subido al siguiente nivel.
      </div>
    </div>
  );
};

export default NotificacionNivel;
