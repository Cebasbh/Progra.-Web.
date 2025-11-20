//Import de librerías

//Import de components

//Import de types
import type { Streamer } from "../../GlobalObjects/Objects_DataTypes";

//Import de css
import "../../GlobalObjects/Global.css"

//Props
interface FollowButtonProps{
    doFollowing : (streamer: Streamer) => void
    isFollowing : boolean
    streamer : Streamer
}

const FollowButton = (props: FollowButtonProps) => {
    
    const FollowOnnClick = () => {
        props.doFollowing(props.streamer)
    }

    return(
        <button className="FollowButton d-flex" onClick={FollowOnnClick}>Follow<i className={props.isFollowing? "bi bi-suit-heart-fill temp":"bi bi-suit-heart temp"}></i></button>
    )
}
export default FollowButton