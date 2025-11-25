import { useState } from "react"
import PointsBar from "./PointsBar"
import type { Message } from "../../GlobalObjects/Objects_DataTypes"
import type { User } from "../../GlobalObjects/Objects_DataTypes"
import type { Stream } from "../../GlobalObjects/Objects_DataTypes"
import "./ChatBar.css"
interface ChatBarProps {
    doChatting : (message : Message, stream : Stream) => void
    GetUser : () => User | null
    stream : Stream
}
const ChatBar = (props : ChatBarProps) => {
    const [TextChat, SetTextChat] = useState<string>("")

    const TextChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        return (
            SetTextChat(e.currentTarget.value)
        )
    }
    const user = props.GetUser();
    const handleChat = () => {
        if (!user){
            return
        }
        const ahora = new Date();
        const horas = ahora.getHours();
        const minutos = ahora.getMinutes();
        const horafinal = `${horas}:${minutos}`
        
        props.doChatting({texto : TextChat, hora : horafinal, user: user}, props.stream)
        console.log(user)
    }
    return(
        <div>
            <div className="ChatBar">
                <input className = "ChatInput" value = {TextChat} onChange = {TextChange} type="text" placeholder={user? "Send a message" : "Inicia sesión para enviar mensajes!"} disabled={!user}/>
            </div>
            <div className="d-flex justify-content-between">
                <PointsBar/>
                <button className = "ChatButton" onClick={handleChat} disabled={!user || TextChat === ""}>Enviar</button>
            </div>
        </div>
        
    )
}
export default ChatBar;