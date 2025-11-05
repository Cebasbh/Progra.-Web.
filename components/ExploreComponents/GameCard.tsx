//Import de librerías

//Import de components

//Import de types
import type { Game } from "../GlobalObjects/Objects_DataTypes"
import type { Tag } from "../GlobalObjects/Objects_DataTypes"

//Import de css
import "../GlobalObjects/Global.css"

//Props
interface GameCardProps{
    game : Game
}
const GameCard = (props: GameCardProps) => {
    return(
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="card">
                <div className="card-image">
                    <img src={props.game.photo} className="card-img-top stream-card-thumbnail clickable"/>
                </div>
                <div className="card-body">
                    <h6 className="card-title fw-bold">{props.game.name}</h6>
                    {
                        props.game.tags.map((tag : Tag) => {
                            return <span className="badge tag">{tag.name}</span>;
                        })
                    } 
                </div>
            </div>
		</div>
    )
}
export default GameCard