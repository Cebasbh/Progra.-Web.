import FollowButton from "./FollowButton"
import type { Stream } from "../../GlobalObjects/Objects_DataTypes"
import type { User } from "../../GlobalObjects/Objects_DataTypes"
import "./StreamingSection.css"

interface StreamingSectionProps{
    stream : Stream
    following: User[];
    doFollowing : (user: User) => void
}
const StreamingSection = (props : StreamingSectionProps) => {
    const isFollowing = () =>{
        let following = false
        for (let i = 0; i < props.following.length; i++) {
            if (props.following[i].id == props.stream.user.id){
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
            <div className = "d-flex justify-content-between my-3">
                <div className="text-start d-flex align-items-center">
					<div className="ImgStreamBox mx-3">
                        <img className="StreamerImg"src={ props.stream.user.pfp } alt="Img"/>
                    </div>
                    <div>
                        <h3 className="TextBox">{ props.stream.user.name }</h3>
                        <h4 className="TextBox my-0">{ props.stream.title}</h4>
                        <h4 className="TextBox m-0">{ props.stream.game.name }</h4>
                    </div>
				</div>
				<div className="text-start d-flex align-items-center">
                    <div className="d-flex mt-4 me-4 align-items-center">
                        <i className="bi bi-person red m-0p.0"></i><h4 className="TextBox red m-0">{props.stream.viewersnumber}</h4>
                    </div>
					<FollowButton doFollowing = {props.doFollowing} isFollowing = {isFollowing()} user={props.stream.user}></FollowButton>
				</div>
            </div>
            <div className = "d-flex justify-content-between my-3">
                <h3 className="TextBox mx-3">Acerca de {props.stream.user.name}:</h3>
            </div>
            
            <div className="alert alert-info m-4 text-card border-0">
                <div className = "d-flex justify-content-between my-3">
                    <div className="mx-3">
                        <h3 className = "TextBox mx-3">{props.stream.user.followers.length} seguidores</h3>
                        <p className = "mx-3">{props.stream.user.bio? props.stream.user.bio : `Hola soy ${props.stream.user.name} y hago streams!`}</p>
                    </div>
                    <div className="text-end me-5">
                        <h4>{props.stream.user.xlink? <i className="bi bi-twitter-x icon m-0"> Twitter</i> : ""}</h4>
                        <h4>{props.stream.user.youtubelink? <i className="bi bi-youtube icon m-0"> Youtube</i> : ""}</h4>
                        <h4>{props.stream.user.instagramlink? <i className="bi bi-instagram icon m-0"> Instagram</i> : ""}</h4>
                        <h4>{props.stream.user.tiktoklink? <i className="bi bi-tiktok icon m-0"> Tiktok</i> : ""}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StreamingSection