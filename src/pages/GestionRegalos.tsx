// pages/GestionRegalos.tsx
// Componente para que streamers gestionen regalos personalizados (Vista estática)

import './GestionRegalos.css';

interface Regalo {
  id: string;
  nombre: string;
  costo: number;
  puntos: number;
}

const GestionRegalos = () => {
  const regalos: Regalo[] = [
    { id: '1', nombre: ' Corazón', costo: 10, puntos: 5 },
    { id: '2', nombre: ' Estrella', costo: 25, puntos: 15 },
    { id: '3', nombre: ' Regalo', costo: 50, puntos: 30 },
  ];

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h3> Gestión de Regalos</h3>
          <p className="text-muted mb-0">Personaliza los regalos disponibles en tu canal</p>
        </div>
        
        <div className="card-body">
          {/* Formulario para agregar nuevo regalo */}
          <div className="nuevo-regalo-form mb-4">
            <h5>Agregar Nuevo Regalo</h5>
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">Nombre del Regalo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej:  Estrella Dorada"
                  disabled
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Costo (DogeCoins)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="10"
                  disabled
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Puntos que otorga</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="5"
                  disabled
                />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button className="btn btn-primary w-100" disabled>
                  Agregar
                </button>
              </div>
            </div>
          </div>

          {/* Lista de regalos */}
          <div className="regalos-lista">
            <h5 className="mb-3">Regalos Actuales ({regalos.length})</h5>
            
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Costo (DogeCoins)</th>
                    <th>Puntos</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {regalos.map(regalo => (
                    <tr key={regalo.id}>
                      <td>
                        <span className="regalo-nombre">{regalo.nombre}</span>
                      </td>
                      <td>
                        <span>{regalo.costo}</span>
                      </td>
                      <td>
                        <span>{regalo.puntos}</span>
                      </td>
                      <td>
                        <div className="btn-group btn-group-sm">
                          <button className="btn btn-outline-primary" disabled>
                            <i className="bi bi-pencil"></i> Editar
                          </button>
                          <button className="btn btn-outline-danger" disabled>
                            <i className="bi bi-trash"></i> Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionRegalos;
