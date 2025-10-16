import { useState } from "react"
import type { Moneda } from "../components/PackMonedas/CardMoneda"
import GridMonedas from "../components/PackMonedas/GridMonedas"
import PasarelaPago from "./PasarelaPago"
import { Link } from "react-router-dom"

const TiposCompra: Moneda[] = [

  {
      id: "1",
      nombre: "Starter pack",
      valor: 30,
      en_soles: 1.50,  
  },
  {
      id: "2",
      nombre: "Bronze pack",
      valor: 350,
      en_soles: 16.45,  
  },
  {
      id: "3",
      nombre: "Silver pack",
      valor: 700,
      en_soles: 30.89,  
  },
  {
      id: "4",
      nombre: "Gold pack",
      valor: 1500,
      en_soles: 60.79,  
  },
  {
      id: "5",
      nombre: "Platinum pack",
      valor: 3500,
      en_soles: 155.45,  
  },
  {
      id: "6",
      nombre: "Galaxy pack",
      valor: 7000,
      en_soles: 308.89,  
  }

]

const PackMonedas = () => {

    
const[opciones] = useState<Moneda[]>(TiposCompra)

  return <div>
      <div className="py-5">
        <div className="container px-5">
          <h3 className="fw-bold">Consigue DogeCoins</h3>
              <div>
                    <GridMonedas moneda={opciones}/>
                    <h5 className="mt-3">Total = PEN{}</h5>
                    <Link to="/PasarelaPago" className="btn btn-primary btn-xl fw-bold" title="Recarga">
                            Recargar
                    </Link>
              </div>
        </div>
      </div>

  </div>
}

export default PackMonedas