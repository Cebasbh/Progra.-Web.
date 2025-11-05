// services/auth.service.ts
// Servicio que simula llamadas a una API de autenticación usando localStorage

import type { User, LoginCredentials, SignupData, UserRole } from '../types/auth';

const USER_STORAGE_KEY = 'streaming_user';

/**
 * Cuentas de prueba pre-configuradas
 */
const DEMO_ACCOUNTS = [
  {
    email: 'espectador@gmail.com',
    password: 'espectador123',
    name: 'Usuario Espectador',
    role: 'viewer' as UserRole,
    level: 5,
    points: 820,
    coins: 150,
  },
  {
    email: 'creador@gmail.com',
    password: 'creador123',
    name: 'Usuario Creador',
    role: 'streamer' as UserRole,
  },
];



/**
 * Simula el login de un usuario
 * En producción, esto haría una petición POST a /api/login
 */
export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
  // Validación básica
  if (!credentials.email || !credentials.password) {
    throw new Error('Email y contraseña son requeridos');
  }
  
  if (!credentials.email.includes('@')) {
    throw new Error('Email inválido');
  }
  
  // Buscar cuenta de prueba
  const demoAccount = DEMO_ACCOUNTS.find(
    acc => acc.email.toLowerCase() === credentials.email.toLowerCase() && 
           acc.password === credentials.password
  );
  
  if (!demoAccount) {
    throw new Error('Credenciales incorrectas');
  }
  
  // Usar los datos de la cuenta de prueba
  const user: User = {
    id: Math.random().toString(36).substr(2, 9),
    name: demoAccount.name,
    email: demoAccount.email,
    role: demoAccount.role,
    // Añadir datos de viewer si corresponde
    ...(demoAccount.role === 'viewer' ? {
      level: demoAccount.level,
      points: demoAccount.points,
      coins: demoAccount.coins,
    } : {}),
  };
  
  // Guardar en localStorage
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  return user;
};

/**
 * Simula el registro de un nuevo usuario
 * Solo permite usar las cuentas de prueba pre-configuradas
 */
export const signupUser = async (_data: SignupData): Promise<User> => {
  throw new Error('El registro está deshabilitado. Por favor, usa una de las cuentas de prueba.');
};

/**
 * Cierra la sesión del usuario
 * En producción, podría invalidar el token en el servidor
 */
export const logoutUser = (): void => {
  localStorage.removeItem(USER_STORAGE_KEY);
};

/**
 * Obtiene el usuario actual desde localStorage
 * En producción, validaría un JWT y obtendría datos del servidor
 */
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem(USER_STORAGE_KEY);
  
  if (!userJson) {
    return null;
  }
  
  try {
    return JSON.parse(userJson) as User;
  } catch (error) {
    console.error('Error parsing user data:', error);
    localStorage.removeItem(USER_STORAGE_KEY);
    return null;
  }
};
