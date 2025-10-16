// pages/Profile.tsx
// Página de perfil del usuario (ruta protegida)

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Puntos from '../assets/Puntos.png';
import './Profile.css';
import NotificacionNivel from '../components/NotificacionNivel';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  /**
   * Maneja el cierre de sesión
   */
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Si no hay usuario (aunque PrivateRoute debería evitar esto)
  if (!user) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">
          No hay usuario autenticado
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5 py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body p-4">
              <h2 className="card-title mb-4">Mi Perfil</h2>
              
              {/* Avatar placeholder */}
              <div className="text-center mb-4">
                <div 
                  className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center profile-avatar"
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>

              {/* Información del usuario */}
              <div className="mb-3">
                <label className="form-label fw-bold">ID de Usuario</label>
                <p className="form-control-plaintext">{user.id}</p>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Nombre</label>
                <p className="form-control-plaintext">{user.name}</p>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <p className="form-control-plaintext">{user.email}</p>
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold">Rol</label>
                <p className="form-control-plaintext">
                  <span className={`badge ${user.role === 'viewer' ? 'bg-info' : 'bg-success'}`}>
                    {user.role === 'viewer' ? 'Espectador' : 'Streamer :)'}
                  </span>
                </p>
              </div>

              
              {user.role === 'viewer' && (
                <div className="card bg-light mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Estadísticas de Espectador</h5>
                    
                    <div className="row g-3 mt-2">
                      {/* RF010 - Nivel */}
                      <div className="col-4">
                        <div className="text-center">
                          <div className="display-6 fw-bold text-primary">{user.level || 5}</div>
                          <p className="text-muted mb-0">
                            <small>⭐ Nivel</small>
                          </p>
                        </div>
                      </div>
                      
                      {/* RF010 - Puntos */}
                      <div className="col-4">
                        <div className="text-center">
                          <div className="display-6 fw-bold text-success">{user.points || 820}</div>
                          <p className="text-muted mb-0">
                            <small>
                              <img src={Puntos} 
                              alt="" 
                              className="profile-points-icon"
                              />Puntos
                              
                            </small>
                          </p>
                        </div>
                      </div>

                      {/* RF009 - Monedas */}
                      <div className="col-4">
                        <div className="text-center">
                          <div className="display-6 fw-bold text-warning">{user.coins || 150}</div>
                          <p className="text-muted mb-0">
                            <small>💰 Monedas</small>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="mb-2">
                        <small className="text-muted">Progreso al siguiente nivel:</small>
                      </p>
                      <div className="progress profile-progress-bar">
                        <div 
                          className="progress-bar bg-success profile-progress-value" 
                          role="progressbar" 
                          aria-valuenow={30} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                        >
                          65%
                        </div>
                      </div>
                    </div>

                    <p className="text-muted mt-3 mb-0">
                      <small>
                        Los puntos se acumulan viendo streams y participando en la comunidad.
                        ¡Sigue activo para subir de nivel!
                      </small>
                    </p>
                  </div>
                </div>
              )}

              {/* Botones de acción */}
              <div className="d-grid gap-2">
                <button 
                  className="btn btn-outline-secondary"
                  onClick={() => navigate('/')}
                >
                  Volver al Inicio
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Información de la cuenta</h5>
              <p className="card-text text-muted">
                Esta es una cuenta simulada. En producción, aquí podrías editar tu perfil,
                cambiar contraseña, configurar preferencias, etc.
              </p>
            </div>
          </div>
          <NotificacionNivel></NotificacionNivel>
        </div>
      </div>
    </div>
    

  );
};

export default Profile;
