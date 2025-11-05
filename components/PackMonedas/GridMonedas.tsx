import type { Moneda } from "./CardMoneda"
import CardMoneda from "./CardMoneda"
import "./GridMonedas.css"

const GridMonedas = (props : GridMonedasProps) => {
    return <div className="container border">
    <div className="row d-flex">
            {
                props.moneda.map( (card : Moneda) => {
                    return <div className="col-md-4 mt-2 mb-2">
                        <div>
                            <CardMoneda moneda={card}/>
                        </div>
                    </div>
                } )
            }
        </div>
        </div>
}

interface GridMonedasProps {
    moneda: Moneda[]
}

export default GridMonedas


