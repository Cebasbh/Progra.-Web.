import "./ChatMessage.css"
import type { Message } from "../GlobalObjects/Objects_DataTypes"
const ChatMessage = (props : ChatMessageProps) => {
    return(
        <h6 className="ChatMessage">{props.mensaje.hora} <i className="bi bi-1-circle"></i> Alvaro777: {props.mensaje.texto}</h6>
    )
}
export default ChatMessage

interface ChatMessageProps {
    mensaje : Message
}