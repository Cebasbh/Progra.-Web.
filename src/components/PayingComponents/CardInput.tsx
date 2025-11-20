import PaymentGateway from "./PaymentGateway"
import type { User } from "../../GlobalObjects/Objects_DataTypes"
interface CardInputProps {
    doPayment: (user : User | null, bought : number) => void
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