import StreamBox from "./StreamBox"
import type { Streamer } from "../GlobalObjects/Objects_DataTypes"
import type { Stream } from "../GlobalObjects/Objects_DataTypes"
interface SideBarProps {
    streams : Stream[]
    following : Streamer[]
}
const SideBar = (props : SideBarProps) => {
    const streamsfollowed = props.streams.filter((stream : Stream)=>{
            return props.following.some((streamer : Streamer)=>{
                return stream.streamer.id === streamer.id
            })
        })
    return(
        <div className="container-fluid">
            <h5 className="TextBox">Canales que sigues</h5>
            {
                streamsfollowed.map((stream : Stream) => {
                    return(
                        <StreamBox stream = {stream}></StreamBox>
                    )
                })
            }
            <h5 className="TextBox">Canales que podrían interesarte</h5>
            {
                props.streams.map((stream : Stream) => {
                    return(
                        <StreamBox stream = {stream}></StreamBox>
                    )
                })
            }
        </div>
    )
}
export default SideBar