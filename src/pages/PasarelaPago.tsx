
import "./PasarelaPago.css"

const PasarelaPago = () => {
  return  <div className="container px- py-5">
      <div>

          <h1>Completar compra</h1>
          <div className="text-start mt-4">
              <h5 className="fw-bold">Resumen de compra</h5>
              <p>{"TipoPaquete"} x{30}monedas </p>
          </div>
          <hr className="w-30 mx-auto border-2"/> 

          <h5 className="fw-bold text-end">PEN {"precio_total"}</h5>
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
           <p>*Tu información se mantendrá confidencial. 🌞</p>

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
         </div>

         {/*boton*/}
                  <div className="modal-footer mt-3">
                    <button type="button" className="btn btn-primary btn-lg"
                    //onClick={() => navigate("/")}
                    >Realizar Pago</button>
                  </div>

      </div>
     

};

export default PasarelaPago;