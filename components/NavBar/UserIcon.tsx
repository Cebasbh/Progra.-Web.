// components/NavBar/UserIcon.tsx
// Icono de usuario con menú desplegable integrado

import { Link } from 'react-router-dom';
import type { User } from '../../types/auth';
import "../GlobalObjects/Icons.css";

interface UserIconProps {
  user: User;
  onLogout: () => void;
}

const UserIcon = ({ user, onLogout }: UserIconProps) => {
  return (
    <div className="dropdown">
      <button 
        className="btn btn-link p-0 user-icon-button"
        type="button" 
        id="userDropdown" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
      >
        <i className="bi bi-person-circle icon user-icon-cursor"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
        {/* Nombre del usuario */}
        <li>
          <div className="dropdown-item-text fw-bold">
            👤 {user.name}
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
        {user.role === 'viewer' && (
          <li>
            <Link to="/convertirse-creador" className="dropdown-item">
              <i className="bi bi-camera-video me-2"></i>
              Convertirse en Creador
            </Link>
          </li>
        )}
        
        {/* Opción: Panel de Creador (solo para streamers) */}
        {user.role === 'streamer' && (
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
            onClick={onLogout} 
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
