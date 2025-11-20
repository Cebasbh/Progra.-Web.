// types/auth.ts
// Define los tipos relacionados con autenticación

export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Datos necesarios para registrarse
 */
export interface SignupData {
  name: string;
  email: string;
  password: string;
}

/**
 * Contexto de autenticación - estado y métodos disponibles
 */
export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}
