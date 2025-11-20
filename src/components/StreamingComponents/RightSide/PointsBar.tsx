import { useState } from "react";
import "./PointsBar.css";
import ListaPremios from "../../ListaPremios";

const PointsBar = () => {
    const [mostrarLista, setMostrarLista] = useState(false);

    // Ejemplo de datos
    const premios = [{item :"Capibara", costo : 20},
                     {item : "Estrella plateada", costo : 40},
                     {item : "Regalo sorpresa", costo : 30}];
    return (
        <div className="d-flex flex-column align-items-center PointsBar">
        <div className="d-flex justify-content-around w-100">
            <i className="btn bi-stars"onClick={() => setMostrarLista(!mostrarLista)}> UserCoins</i>
            <i className="btn bi bi-airplane-engines-fill"> UserPoints</i>
        </div>

        {/* Si mostrarLista es true, renderiza el componente */}
        {mostrarLista && <ListaPremios items={premios} />}
        </div>
    );
};

export default PointsBar;