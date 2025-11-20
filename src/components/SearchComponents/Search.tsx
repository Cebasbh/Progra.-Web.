//Import de librerías
import { useParams } from "react-router-dom";

//Import de componentss
import StreamCard from "../HomeComponents/Streamcard";

//Import de types
import type { Stream } from "../../GlobalObjects/Objects_DataTypes";

//Import de css
import "../../GlobalObjects/Animations.css"
import "../../GlobalObjects/Global.css"

//Props
interface SearchProps{
    streams : Stream[]
}

const Search = (props : SearchProps) => {
    const { name } = useParams<{ name: string }>();
    const searchedstream = props.streams.filter((stream : Stream)=>{
        return stream.user.name.toUpperCase() === name?.toUpperCase()
    })
	return (
		<div className="container my-5">
			<h1 className="mb-4">Búsqueda:</h1>
			<div className="row">
				{
                searchedstream.map((stream : Stream) => (
				<StreamCard stream = {stream}></StreamCard>
				))
                }
			</div>
		</div>
	);
}

export default Search;