import { useState } from "react"

const FollowButton = () => {
    const [following,SetFollowing] = useState<boolean>(false)
    const Following = () => {
        SetFollowing(!following)
    }
    return(
        <button className="FollowButton" onClick={Following}><i  className={following? "bi bi-suit-heart-fill":"bi bi-suit-heart"}></i>Follow</button>
    )
}
export default FollowButton