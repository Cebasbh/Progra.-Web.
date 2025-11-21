import ChatMessage from "./ChatMessage"
import ChatBar from "./ChatBar"
import type { Message } from "../../GlobalObjects/Objects_DataTypes"
import type { User } from "../../GlobalObjects/Objects_DataTypes"
import "./RightSide.css"
interface RightSideProps {
    mensajes : Message[]
    setMensajes : (newmensajes : Message[]) => void
    GetUser : () => User | null
}
const RightSide = (props: RightSideProps) => {
    return(
        <div className="RightSide">
            <div className="ChatTitle">
                <h5 className="TextBox">Stream Chat</h5>
            </div>
            <div className="RightSideScroll">
                {
                    props.mensajes.map((mensaje : Message) => {
                        return(
                            <ChatMessage mensaje ={mensaje}></ChatMessage>
                        )
                    })
                }
            </div>
            <ChatBar mensajes={props.mensajes} setMensajes = {props.setMensajes} GetUser={props.GetUser} />
        </div>
    )
}
export default RightSide