import { useState } from "react"
import type { Message } from "../../GlobalObjects/Objects_DataTypes"
import type { User } from "../../GlobalObjects/Objects_DataTypes"
import "./ChatBar.css"
interface ChatBarProps {
    mensajes : Message[]
    setMensajes : (newmensajes : Message[]) => void
    GetUser : () => User | null
}
const ChatBar = (props : ChatBarProps) => {
    const [TextChat, SetTextChat] = useState<string>("")
    const [contador, setContador] = useState<number>(0);

    const TextChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        return (
            SetTextChat(e.currentTarget.value)
        )
    }
    const user = props.GetUser();
    const TextEnter = (texto : string) => {
        if (!user){
            return
        }
        const ahora = new Date();
        const horas = ahora.getHours();
        const minutos = ahora.getMinutes();
        const horafinal = `${horas}:${minutos}`
        //TODO: Cambiar el inchat, es urgente
        props.setMensajes([...props.mensajes, {texto : texto, hora : horafinal, user: user, inchat : user}])
        setContador(contador + 1);
        console.log("Se clickeó " + contador + " veces")
    }
    return(
        <div className="ChatBar">
            <input className = "ChatInput" value = {TextChat} onChange = {TextChange} type="text" placeholder={user? "Send a message" : "Inicia sesión para enviar mensajes!"} disabled={!user}/>
            <button className = "ChatButton" onClick={() => (TextEnter(TextChat))} disabled={!user || TextChat === ""}>Envíar</button>
        </div>
    )
}
export default ChatBar;