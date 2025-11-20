import FollowButton from "./FollowButton"
import type { Stream } from "../../GlobalObjects/Objects_DataTypes"
import type { Streamer } from "../../GlobalObjects/Objects_DataTypes"
import "./StreamingSection.css"

interface StreamingSectionProps{
    stream : Stream
    following: Streamer[];
    doFollowing : (streamer: Streamer) => void
}
const StreamingSection = (props : StreamingSectionProps) => {
    const isFollowing = () =>{
        let following = false
        for (let i = 0; i < props.following.length; i++) {
            if (props.following[i].id == props.stream.streamer.id){
                following = true;
            }
        }
        return following
    }
    return(
        <div className="MiddleSide">
            <div className="VideoPlace">
                <img className = "VideoPlaceHolder" src={props.stream.thumbnail} alt="Stream"/>
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
                        <FollowButton doFollowing = {props.doFollowing} isFollowing = {isFollowing()} streamer={props.stream.streamer}></FollowButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StreamingSection