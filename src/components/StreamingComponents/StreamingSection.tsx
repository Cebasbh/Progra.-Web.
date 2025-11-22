import FollowButton from "./FollowButton"
import ProgressBar from "./ProgressBar"
import SocialLink from "./SocialLink"
import type { Stream } from "../../GlobalObjects/Objects_DataTypes"
import type { User } from "../../GlobalObjects/Objects_DataTypes"
import "./StreamingSection.css"

interface StreamingSectionProps{
    stream : Stream
    following: User[];
    doFollowing : (user: User) => void
}
const StreamingSection = (props : StreamingSectionProps) => {
    const DivisiónAproximada = (dividendo : number, divisor : number, decimas : number) => {
        const cociente = dividendo/divisor;
        return(cociente.toFixed(decimas))
    }
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
				<div className="text-start ">
					<FollowButton doFollowing = {props.doFollowing} isFollowing = {isFollowing()} user={props.stream.user}></FollowButton>
                    <div className="ms-4">
                        <span className="badge bg-danger">{props.stream.viewersnumber >= 1000000? DivisiónAproximada(props.stream.viewersnumber,1000000,1) + " M ": props.stream.viewersnumber >= 1000? DivisiónAproximada(props.stream.viewersnumber,1000,1) + " K ":props.stream.viewersnumber}viewers</span>
                    </div>
				</div>
            </div>  
            <div className = "d-flex justify-content-between ">
                <div className="fill-sides">
                    <div className = "d-flex justify-content-between ">
                        <h3 className="TextBox mx-4">Acerca de {props.stream.user.name} </h3>
                    </div>
                    <div className="alert alert-info m-4 mt-2 text-card border-0">
                        <div className = "d-flex justify-content-between my-3">
                            <div className="mx-3">
                                <h3 className = "TextBox mx-3">{props.stream.user.followers.length} seguidores</h3>
                                <p className = "mx-3 text-break word-break-break-word">{props.stream.user.bio? props.stream.user.bio : `Hola soy ${props.stream.user.name} y hago streams!`}</p>
                            </div>
                            <div className="text-end me-5">
                                <SocialLink link={props.stream.user.xlink} icon = "bi-twitter-x" text = "Twitter"></SocialLink>
                                <SocialLink link={props.stream.user.youtubelink} icon = "bi-youtube" text = "Youtube"></SocialLink>
                                <SocialLink link={props.stream.user.instagramlink} icon = "bi-instagram" text = "Instagram"></SocialLink>
                                <SocialLink link={props.stream.user.tiktoklink} icon = "bi-tiktok" text = "Tiktok"></SocialLink>
                                <SocialLink link={props.stream.user.discordlink} icon = "bi-discord" text = "Discord"></SocialLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fill-sides">
                    <div className = "d-flex justify-content-between">
                        <h3 className="TextBox mx-4">Metas de {props.stream.user.name} </h3>
                    </div>
                    <div className="alert alert-info m-4 mt-2 text-card border-0">
                        <div className = "my-3">
                            <ProgressBar actual={props.stream.user.streaminghours} max={props.stream.user.streamerlevel.max_hours}topic={"horas"} ></ProgressBar >
                            <ProgressBar actual={props.stream.user.followers.length} max={props.stream.user.streamerlevel.max_followers} topic={"followers"}></ProgressBar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StreamingSection