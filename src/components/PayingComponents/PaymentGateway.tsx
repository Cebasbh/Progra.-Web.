import { useLocation } from "react-router-dom";
import type { Pack } from "../../GlobalObjects/Objects_DataTypes";
import type { User } from "../../GlobalObjects/Objects_DataTypes";
import "./PaymentGateway.css"

interface PaymentGatewayProps {
	doPayment: (user : User | null, bought : number) => void
	GetUser : () => User | null
}
const PaymentGateway = (props : PaymentGatewayProps) => {
	const location = useLocation();
	const { pack } = (location.state || {}) as { pack?: Pack };

	return (
		<div className="alert alert-info mt-4 text-card border-0">
			<h1>Completar compra</h1>
			<div className="d-flex justify-content-between align-items-center mt-4">
				<div className="text-start">
					//TODO FIX PaymentGateway
					{pack? <h5 className="fw-bold">{pack.name}</h5> : <h5 className="fw-bold">CANTIDAD ARBITRARIA</h5>}
				</div>
				<div className="text-end">
					<h5 className="fw-bold">PEN {pack?.finalprice}</h5>
				</div>
			</div>
			<hr className="w-30 mx-auto border-2"/> 

			<div className="border  px-3 py-2">
				
				<div className="row">

				<div className="text-start mt-3 col-6">
				<h5 className="fw-bold">Pagar con Tarjeta</h5>
				<h6>Información de facturación</h6>
				
				
			</div>
			<div className="col-6 mt-3 text-end">
				<img src="https://content.app-sources.com/s/80905201177183951/uploads/Images/credit-card-logos-2213231.png?format=webp" className="img_pago mb-3" alt="tarjetas" />
			</div>
				</div>

			<form className="row g-3 text-start mb-3">
				<div className="col-md-6">
				<label className="form-label">Nombre</label>
				<input type="text" className="form-control" id="inputNombre"/>
				</div>
				<div className="col-md-6">
				<label className="form-label">Apellido</label>
				<input type="text" className="form-control" id="inputApellido"/>
				</div>
				<div className="col-12">
				<label className="form-label">Numero de tarjeta</label>
				<input type="text" className="form-control" id="inputTarjeta" placeholder="XXXX-XXXX XXXX-XXXX"/>
				</div>
				<div className="col-12">
				<label  className="form-label">CVV</label>
				<input type="text" className="form-control" id="inputCVV" placeholder="123"/>
				</div>
			</form>
			</div>
			<div className="modal-footer mt-3">
				<button type="button" className="btn btn-primary page-button" onClick={() => {props.doPayment(props.GetUser(),pack? pack.value : 1000)}}>Realizar Pago</button>
			</div>
			</div>
		)
};

export default PaymentGateway;