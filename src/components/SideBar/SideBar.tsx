import StreamBox from "./StreamBox"
import type { Stream } from "../GlobalObjects/Objects_DataTypes"
import "./SideBar.css"

interface SideBarProps {
    streams : Stream[]
}
const SideBar = (props : SideBarProps) => {
    return(
        <div className="LeftSideScroll container-fluid">
            <h5 className="TextBox">Channels that you follow</h5>
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