//Import de librerías

//Import de components

//Import de types
import type { User } from "../../GlobalObjects/Objects_DataTypes";

//Import de css
import "../../GlobalObjects/Animations.css"
import "../../GlobalObjects/Global.css"

//Props
interface FollowButtonProps{
    doFollowing : (user: User) => void
    isFollowing : boolean
    user : User
}

const FollowButton = (props: FollowButtonProps) => {
    
    const FollowOnnClick = () => {
        props.doFollowing(props.user)
    }

    return(
        <button className="FollowButton d-flex" onClick={FollowOnnClick}>Follow<i className={props.isFollowing? "bi bi-suit-heart-fill temp":"bi bi-suit-heart temp"}></i></button>
    )
}
export default FollowButton