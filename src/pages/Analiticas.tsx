 

const Analiticas = () => {
    // Datos simulados de analíticas (en una aplicación real vendrían del backend)
    const analytics = {
        horasTransmitidas: '24:35',
        monedasRecibidas: 2450,
    };

    return (
        <div className="container p-4">
            <h1 className="mb-4">Panel de Analíticas</h1>
            
            {/* Resumen Principal */}
            <div className="row mb-4">
                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Horas Transmitidas</h5>
                            <h2 className="display-4">{analytics.horasTransmitidas}</h2>
                            <p className="text-muted">Este mes</p>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Monedas Recibidas</h5>
                            <h2 className="display-4">{analytics.monedasRecibidas}</h2>
                            <p className="text-muted">Este mes</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Analiticas;
