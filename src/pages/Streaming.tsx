import { useParams } from "react-router-dom"
import RightSide from "../components/StreamingComponents/RightSide/RightSide"
import StreamingSection from "../components/StreamingComponents/MiddleSide/StreamingSection"

import type { Stream } from "../components/GlobalObjects/Objects_DataTypes"
import type { Streamer } from "../components/GlobalObjects/Objects_DataTypes"
import type { Message } from "../components/GlobalObjects/Objects_DataTypes"
import "./Streaming.css"
import { useState } from "react"
interface StreamingProps{
    streams : Stream[]
    following: Streamer[];
    doFollowing : (streamer: Streamer) => void
}
const Streaming = (props : StreamingProps) => {
    const [mensajes, SetMensajes] = useState<Message[]>([])
    const { name } = useParams<{ name: string }>();
    const stream = props.streams.filter((stream : Stream)=>{
        return stream.streamer.nickname === name
    })
    
    return (
    <div className = "container-fluid vh-100">
        <div className="row Main-Seccion">
            <div className="col-9" id="Middle-Page">
                <StreamingSection stream={stream[0]} following = {props.following} doFollowing={props.doFollowing}></StreamingSection>
            </div>
            <div className="col-3" id="Right-Page">
                <RightSide mensajes = {mensajes} setMensajes = {SetMensajes}></RightSide>
            </div>
        </div>
    </div>
    )
}

export default Streaming
