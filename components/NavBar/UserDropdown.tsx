// components/NavBar/UserDropdown.tsx
// Menú desplegable con opciones de usuario

import { Link } from 'react-router-dom';
import type { User } from '../../types/auth';

interface UserDropdownProps {
  user: User;
  onLogout: () => void;
}

const UserDropdown = ({ user, onLogout }: UserDropdownProps) => {
  return (
    <div className="dropdown">
      <button 
        className="btn btn-outline-primary btn-sm dropdown-toggle" 
        type="button" 
        id="userDropdown" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
      >
        👤 {user.name}
      </button>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
        {/* Opción: Ver Perfil */}
        <li>
          <Link to="/profile" className="dropdown-item">
            <i className="bi bi-person-circle me-2"></i>
            Ver Perfil
          </Link>
        </li>
        
        <li><hr className="dropdown-divider" /></li>
        
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
        
        {(user.role === 'viewer' || user.role === 'streamer') && (
          <li><hr className="dropdown-divider" /></li>
        )}
        
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

export default UserDropdown;
