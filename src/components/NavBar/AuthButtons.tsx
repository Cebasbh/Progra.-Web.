// components/NavBar/AuthButtons.tsx
// Botones de iniciar sesión y registrarse para usuarios no autenticados

import { Link } from 'react-router-dom';
import "../../css/Icons.css";

const AuthButtons = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <Link to="/login" className="btn btn-outline-primary">
        Iniciar Sesión
      </Link>
      <Link to="/signup" className="btn btn-primary">
        Registrarse
      </Link>
    </div>
  );
};

export default AuthButtons;
