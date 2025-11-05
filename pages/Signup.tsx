// pages/Signup.tsx
// Página de registro de nuevos usuarios

import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FormInput from '../components/forms/FormInput';
import SubmitButton from '../components/forms/SubmitButton';
import type { SignupData } from '../types/auth';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  
  // Estado del formulario
  const [formData, setFormData] = useState<SignupData>({
    name: '',
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
      await signup(formData);
      // Redirigir al home después del registro exitoso
      navigate('/');
    } catch (err) {
      // Mostrar error
      setError(err instanceof Error ? err.message : 'Error al registrarse');
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
              <h2 className="card-title text-center mb-4">Crear Cuenta</h2>
              
              {/* Mensaje de error */}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Nombre"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  disabled={loading}
                />

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

                <div className="text-muted mb-3 password-hint">
                  La contraseña debe tener al menos 6 caracteres
                </div>

                <SubmitButton
                  text="Registrarse"
                  loading={loading}
                />
              </form>

              <div className="text-center mt-3">
                <p className="mb-0">
                  ¿Ya tienes cuenta?{' '}
                  <Link to="/login" className="text-decoration-none">
                    Inicia sesión aquí
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

export default Signup;
