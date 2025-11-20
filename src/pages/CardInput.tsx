import PaymentGateway from "../components/PayingComponentes/PaymentGateway"
import type { User } from "../components/GlobalObjects/Objects_DataTypes"
interface CardInputProps {
    doPayment: (user : User | null, bought : number | undefined) => void
    GetUser : () => User | null
}
const CardInput = (props:CardInputProps) =>{
    return(
        <div className="container py-4">
            <PaymentGateway doPayment={props.doPayment} GetUser={props.GetUser}></PaymentGateway>
        </div>
    )
}
export default CardInput