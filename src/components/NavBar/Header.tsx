// components/NavBar/Header.tsx
// Barra de navegación principal - Refactorizada con componentes modulares

import { useAuth } from '../../context/AuthContext';
import BrandLogo from './BrandLogo';
import SearchBarNav from './SearchBarNav';
import CoinsDisplay from './CoinsDisplay';
import UserIcon from './UserIcon';
import AuthButtons from './AuthButtons';
import ThreeDotsIcon from './ThreeDotsIcon';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="NavBar p-3">
      {/* Sección izquierda: Logo y menú de opciones */}
      <div className="col-4 Right-NavBar">
        <BrandLogo />
        <ThreeDotsIcon />
        <NavLink 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
          to="/explore"
        >
          Explorar
        </NavLink>
      </div>


      {/* Sección central: Barra de búsqueda */}
      <div className="col-4 Middle-NavBar">
        <SearchBarNav />
      </div>

      {/* Sección derecha: Usuario o autenticación */}
      <div className="col-4 Left-NavBar">
        <div className="d-flex align-items-center justify-content-end gap-2">
          {user ? (
            <>
              {/* Botón para comprar Stars (solo para viewers) */}
              {user.role === 'viewer' && (
                <Link to="/PackMonedas" className="btn btn-warning btn-sm fw-bold" title="Comprar Stars">
                  Comprar
                </Link>
              )}
              
              {/* Mostrar monedas si es viewer */}
              {user.role === 'viewer' && user.coins !== undefined && (
                <CoinsDisplay coins={user.coins} />
              )}
              
              {/* Icono de perfil de usuario */}
              <UserIcon user={user} onLogout={logout}/>
            </>
          ) : (
            <>
              {/* Botones de autenticación para usuarios no logueados */}
              <AuthButtons />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;