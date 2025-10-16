 

const PanelHeader = function(){
  return (
    <div className="d-flex align-items-center justify-content-between">
      <h1 className="h4">Panel de creador</h1>
      <div>
        <button className="btn btn-success me-2">Iniciar Stream</button>
        <button className="btn btn-secondary">Configuración</button>
      </div>
    </div>
  );
};

export default PanelHeader;
