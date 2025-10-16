function Explore() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Explorar Categorías</h1>
      <p className="text-muted">
        Aquí aparecerían todas las categorías de streams disponibles.
      </p>
      <div className="row">
        {['Juegos', 'IRL', 'Música', 'Arte', 'Deportes', 'Charlas'].map((category) => (
          <div key={category} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{category}</h5>
                <p className="card-text">Ver todos los streams de {category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;