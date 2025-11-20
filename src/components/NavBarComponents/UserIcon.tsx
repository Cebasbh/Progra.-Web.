// components/NavBar/UserIcon.tsx
// Icono de usuario con menú desplegable integrado

import { Link } from 'react-router-dom';
import type { User } from "../GlobalObjects/Objects_DataTypes";
import "../GlobalObjects/Icons.css";

interface UserIconProps {
    user: User | null;
    doLogOut: () => void;
}

const UserIcon = (props : UserIconProps) => {
  return (
    <div className="dropdown">
      <button className="carousel-button d-flex justify-content-center align-items-center border-0" type="button" id="userDropdown" data-bs-toggle="dropdown" 
        aria-expanded="false">
        <i className="bi bi-person-circle icon user-icon-cursor"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
        <li>
          <div className="dropdown-item-text fw-bold">
            👤 {props.user?.name}
          </div>
        </li>
        
        <li><hr className="dropdown-divider" /></li>
        
        {/* Opción: Ver Perfil */}
        <li>
          <Link to="/profile" className="dropdown-item">
            <i className="bi bi-person-circle me-2"></i>
            Ver Perfil
          </Link>
        </li>
        
        {/* Opción: Convertirse en Creador (solo para viewers) */}
        {props.user?.role === 'viewer' && (
          <li>
            <Link to="/convertirse-creador" className="dropdown-item">
              <i className="bi bi-camera-video me-2"></i>
              Convertirse en Creador
            </Link>
          </li>
        )}
        
        {/* Opción: Panel de Creador (solo para streamers) */}
        {props.user?.role === 'streamer' && (
          <li>
            <Link to="/panelcreador" className="dropdown-item">
              <i className="bi bi-speedometer2 me-2"></i>
              Panel de Creador
            </Link>
          </li>
        )}
        
        <li><hr className="dropdown-divider" /></li>
        
        {/* Opción: Cerrar Sesión */}
        <li>
          <button 
            onClick={props.doLogOut} 
            className="dropdown-item text-danger"
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserIcon;
