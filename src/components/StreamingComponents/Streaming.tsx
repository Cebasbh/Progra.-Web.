import { useParams } from "react-router-dom"
import RightSide from "./RightSide"
import StreamingSection from "./StreamingSection"

import type { Stream } from "../../GlobalObjects/Objects_DataTypes"
import type { User } from "../../GlobalObjects/Objects_DataTypes"
import type { Message } from "../../GlobalObjects/Objects_DataTypes"
import "./Streaming.css"
import { useState } from "react"
interface StreamingProps{
    streams : Stream[]
    following: User[];
    doFollowing : (user: User) => void
    GetUser : () => User | null
}
const Streaming = (props : StreamingProps) => {
    const [mensajes, SetMensajes] = useState<Message[]>([])
    const { name } = useParams<{ name: string }>();
    const stream = props.streams.filter((stream : Stream)=>{
        return stream.user.name.toUpperCase() === name?.toUpperCase()
    })
    
    return (
    <div className = "d-flex vh-100 no-scroll">
        <div id="Middle-Page">
            <StreamingSection stream={stream[0]} following = {props.following} doFollowing={props.doFollowing}></StreamingSection>
        </div>
        <div id="Right-Page">
            <RightSide mensajes = {mensajes} setMensajes = {SetMensajes} GetUser={props.GetUser}></RightSide>
        </div>
    </div>
    )
}

export default Streaming
