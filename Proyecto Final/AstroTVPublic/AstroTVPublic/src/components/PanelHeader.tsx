import { Link } from "react-router-dom";
const PanelHeader = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <h1 className="h4">Panel de creador</h1>
      <div>
        <Link to={`/startstream`}>
          <button className="btn page-button me-2">Iniciar Stream</button>
        </Link>
      </div>
    </div>
  );
};

export default PanelHeader;
