// pages/ConvertirseCreador.tsx
// Página para que los espectadores se conviertan en creadores

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './ConvertirseCreador.css';

const ConvertirseCreador = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [accepted, setAccepted] = useState(false);

  // Si no hay usuario o ya es streamer, redirigir
  if (!user) {
    navigate('/login');
    return null;
  }

  if (user.role === 'streamer') {
    navigate('/panelcreador');
    return null;
  }

  const handleConvertir = () => {
    if (!accepted) {
      alert('Debes aceptar los términos y condiciones para continuar.');
      return;
    }

    // Actualizar el usuario a streamer
    const updatedUser: typeof user = {
      ...user,
      role: 'streamer',
      // Eliminar datos de viewer ya que ahora es streamer
      level: undefined,
      points: undefined,
      coins: undefined,
      creatorRequestPending: undefined,
    };

    // Actualizar el contexto y localStorage
    updateUser(updatedUser);

    // Mostrar mensaje de éxito
    alert('¡Felicidades! Ahora eres un creador. Ya puedes acceder al Panel de Creador.');
    
    // Redirigir al panel de creador
    navigate('/panelcreador');
  };

  return (
    <div className="container mt-5 mb-5 py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          
          {/* Encabezado */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">
              Conviértete en Creador
            </h1>
            <p className="lead text-muted">
              Comparte tu pasión con el mundo y construye tu comunidad
            </p>
          </div>

          {/* Beneficios */}
          <div className="card shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">Beneficios de ser Creador</h3>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center feature-icon">
                        🎥
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-2">Transmisiones en Vivo</h5>
                      <p className="text-muted mb-0">
                        Realiza streams en vivo y conecta con tu audiencia en tiempo real.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center feature-icon">
                        💰
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-2">Monetización</h5>
                      <p className="text-muted mb-0">
                        Recibe donaciones y suscripciones de tus espectadores.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center feature-icon">
                        📊
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-2">Analíticas Avanzadas</h5>
                      <p className="text-muted mb-0">
                        Accede a estadísticas detalladas sobre tu audiencia y rendimiento.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center feature-icon">
                        👥
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-2">Comunidad</h5>
                      <p className="text-muted mb-0">
                        Construye y gestiona tu propia comunidad de seguidores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Requisitos */}
          <div className="card shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">Requisitos</h3>
              
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-3 benefit-icon"></i>
                  <div>
                    <strong>Tener al menos 18 años</strong>
                    <p className="text-muted mb-0 small">Debes ser mayor de edad para crear contenido.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-3 benefit-icon"></i>
                  <div>
                    <strong>Cumplir con las normas de la comunidad</strong>
                    <p className="text-muted mb-0 small">Respetar las reglas y políticas de la plataforma.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-3 benefit-icon"></i>
                  <div>
                    <strong>Verificación de identidad</strong>
                    <p className="text-muted mb-0 small">Proporcionar documentación válida para verificación.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario de Aceptación */}
          <div className="card shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">Confirmación</h3>
              
              <div className="form-check mb-4">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="termsCheck"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  He leído y acepto los{' '}
                  <a href="/TyC" target="_blank" rel="noopener noreferrer">
                    Términos y Condiciones
                  </a>
                  {' '}y las{' '}
                  <a href="/TyC" target="_blank" rel="noopener noreferrer">
                    Normas de la Comunidad
                  </a>
                </label>
              </div>

              <div className="alert alert-info mb-4" role="alert">
                <i className="bi bi-info-circle me-2"></i>
                <strong>Nota:</strong> Al aceptar, tu cuenta será convertida inmediatamente a una cuenta de creador.
                Podrás acceder al Panel de Creador y comenzar a transmitir.
              </div>

              <div className="d-grid gap-2">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={handleConvertir}
                  disabled={!accepted}
                >
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Aceptar y Convertirse en Creador
                </button>
                <button 
                  className="btn btn-outline-secondary"
                  onClick={() => navigate('/profile')}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConvertirseCreador;
