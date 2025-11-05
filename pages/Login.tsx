// pages/Login.tsx
// Página de inicio de sesión

import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FormInput from '../components/forms/FormInput';
import SubmitButton from '../components/forms/SubmitButton';
import type { LoginCredentials } from '../types/auth';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  // Estado del formulario
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  
  // Estado de carga y errores
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  /**
   * Maneja los cambios en los inputs
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error al escribir
    if (error) setError('');
  };

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(formData);
      // Redirigir al home después del login exitoso
      navigate('/');
    } catch (err) {
      // Mostrar error
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Iniciar Sesión</h2>
              
              {/* Cuentas de prueba */}
              <div className="alert" role="alert">
                <strong>Cuentas de prueba:</strong>
                <ul className="mb-0 mt-2">
                  <li><strong>Espectador:</strong> espectador@gmail.com / espectador123</li>
                  <li><strong>Creador:</strong> creador@gmail.com / creador123</li>
                </ul>
              </div>
              
              {/* Mensaje de error */}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  disabled={loading}
                />

                <FormInput
                  label="Contraseña"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  disabled={loading}
                />

                <SubmitButton
                  text="Iniciar Sesión"
                  loading={loading}
                />
              </form>

              <div className="text-center mt-3">
                <p className="mb-0">
                  ¿No tienes cuenta?{' '}
                  <Link to="/signup" className="text-decoration-none">
                    Regístrate aquí
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
