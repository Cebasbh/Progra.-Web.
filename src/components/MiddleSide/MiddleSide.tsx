import Video from "../../assets/Video.png"
import FollowButton from "./FollowButton"
import type { Stream } from "../SideBar/StreamBox"
import "./MiddleSide.css"
import "../SideBar/StreamBox.css"

interface MiddleSideProps{
    stream : Stream
}
const MiddleSide = (props : MiddleSideProps) => {
    return(
        <div className="MiddleSide">
            <div className="VideoPlace">
                <img className = "VideoPlaceHolder" src={Video} alt="Stream"/>
            </div>
            <div className="StreamerDescriptionContainer">
                <div className="StreamerDescription">
                    <div className="Left-Section-StreamerDescription">
                        <div className="ImgStreamBox">
                            <img className="StreamerImg"src={ props.stream.streamer.photo } alt="Img"/>
                        </div>
                        <div>
                            <h4 className="TextBox">{ props.stream.streamer.nickname }</h4>
                            <h4 className="TextBox">{ props.stream.game.name }</h4>
                        </div>
                    </div>
                    <div className="Middle-Section-StreamerDescription">
                        <div className="StreamViewers">
                            <i className="bi bi-person red"></i><h4 className="TextBox red">{props.stream.viewers}</h4>
                        </div>
                    </div>
                    <div className="Right-Section-StreamerDescription">
                        <FollowButton></FollowButton>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default MiddleSide