// components/NavBar/BrandLogo.tsx
// Componente del logo/marca de la aplicación (AstroTV)

import { Link } from 'react-router-dom';
import "../../css/Title.css";
import "./BrandLogo.css";

const BrandLogo = () => {
  return (
    <Link to="/" className="brand-logo-link">
      <h1 className="title">AstroTV</h1>
    </Link>
  );
};

export default BrandLogo;
