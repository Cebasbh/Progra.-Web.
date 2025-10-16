import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Columna de enlaces */}
          <div className="col-md-6">
            <h6 className="fw-bold mb-3">AstroTV</h6>
            <ul className="list-unstyled">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/Nosotros"
                >
                  Acerca de
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/TyC"
                >
                  Terminos y Condiciones
                </NavLink>
              </li>

              <li><a href="#" className="text-white-50 text-decoration-none">Privacidad</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Ayuda</a></li>
            </ul>
          </div>

          {/* Columna de información */}
          <div className="col-md-6 text-md-end">
            <p className="text-white-50 mb-0">
              Todos los derechos reservados.
            </p>
            <p className="text-white-50 small">
              Universidad de Lima - Programación Web
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;