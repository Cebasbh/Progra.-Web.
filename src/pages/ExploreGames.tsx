//Import de librerías
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//Import de componentss
import GameCard from "../components/ExploreComponents/GameCard";

//Import de types
import type { Game } from "../components/GlobalObjects/Objects_DataTypes";
import type { Tag } from "../components/GlobalObjects/Objects_DataTypes";

//Import de css
import "../components/GlobalObjects/Animations.css"
import "../components/GlobalObjects/Global.css"

//Props
interface ExploreGamesProps{
    games : Game[]
}

const ExploreGames = (props : ExploreGamesProps) => {
    const { name } = useParams<{ name: string }>();
    const filteredgames = props.games.filter((game : Game)=>{
        return game.tags.some((tag : Tag)=>{
            return tag.name === name
        })
    })
	return (
		<div className="container my-5">
			<h1 className="mb-4">Explorar: <Link to={`/exploretags/`}><span className="badge tag m-1">{name}</span></Link></h1>
			<div className="row">
				{
                filteredgames.map((game : Game) => (
				<GameCard game = {game}></GameCard>
				))
                }
			</div>
		</div>
	);
}

export default ExploreGames;