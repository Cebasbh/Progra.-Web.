//ELIMINAR CARPETA CUANDO SUBAN LA NUEVA UI DE PAQUETES
import "./CardMoneda.css"
import dogecoinLogo from "../../assets/doge.png"

const CardMoneda = (props: CardMonedaProps) => {
    return <div className="text-center">
      <button className="card btn btn-outline-secondary">
            <div className="card_moneda">
            <div className="card-body ">
              <h5>{props.moneda.nombre}</h5>
              <h3 className="card-title fw-bold">
                <img 
                  src={dogecoinLogo} 
                  alt="Dogecoin" 
                  className="dogecoin-logo"
                />
                {props.moneda.valor}
              </h3>
              <p className="card-text">PEN{props.moneda.en_soles}</p>
              </div>
          </div>
          </button>
    </div>


}

export type Moneda = {
  id: string;
  nombre: string;
  valor: number;
  en_soles: number;
}

interface CardMonedaProps {
  moneda: Moneda
}

export default CardMoneda