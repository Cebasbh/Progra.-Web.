import SideBar from "../components/SideBar/SideBar"
import RightSide from "../components/RightSide/RightSide"
import MiddleSide from "../components/MiddleSide/MiddleSide"

import type { Stream } from "../components/GlobalObjects/Objects_DataTypes"
import type { Message } from "../components/GlobalObjects/Objects_DataTypes"
import "./Streaming.css"
import { useState } from "react"
interface StreamingProps{
    streams : Stream[]
}
const Streaming = (props : StreamingProps) => {
    const [mensajes, SetMensajes] = useState<Message[]>([])
    
    return (
    <div className = "container-fluid vh-100">
        <div className="row Main-Seccion">
            <div className="col-2" id="Left-Page">
                <SideBar streams = {props.streams}></SideBar>
            </div>
            <div className="col-7" id="Middle-Page">
                <MiddleSide stream={props.streams[0]}></MiddleSide>
            </div>
            <div className="col-3" id="Right-Page">
                <RightSide mensajes = {mensajes} setMensajes = {SetMensajes}></RightSide>
            </div>
        </div>
    </div>
    )
}

export default Streaming
