import "./PointsBar.css";
import "../../GlobalObjects/Icons.css";

const PointsBar = () => {

    // Ejemplo de datos
    const premios = [{item :"Capibara", costo : 20},
                     {item : "Estrella plateada", costo : 40},
                     {item : "Regalo sorpresa", costo : 30}];
    return (
        <div className="d-flex">
            <div className="dropup">
            <button className="support-button d-flex justify-content-center align-items-center border-0" type="button" id="userDropdown" data-bs-toggle="dropdown" 
                aria-expanded="false">
                <i className="bi bi-star-fill ministars"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li>
                    <div className="dropdown-item-text fw-bold">
                        {premios[0].item}
                    </div>
                </li>
            </ul>
            </div>
            <div className="dropup">
            <button className="support-button d-flex justify-content-center align-items-center border-0" type="button" id="userDropdown" data-bs-toggle="dropdown" 
                aria-expanded="false">
                <i className="bi bi-trophy-fill ministars"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li>
                    <div className="dropdown-item-text fw-bold">
                        {premios[0].item}
                    </div>
                </li>
            </ul>
            </div>
        </div>
    );
};

export default PointsBar;