//Import de librerías
import { useParams } from "react-router-dom";

//Import de componentss
import StreamCard from "../components/HomeComponents/Streamcard";

//Import de types
import type { Stream } from "../components/GlobalObjects/Objects_DataTypes";

//Import de css
import "../components/GlobalObjects/Animations.css"
import "../components/GlobalObjects/Global.css"

//Props
interface SearchProps{
    streams : Stream[]
}

const Search = (props : SearchProps) => {
    const { name } = useParams<{ name: string }>();
    const searchedstream = props.streams.filter((stream : Stream)=>{
        return stream.streamer.nickname === name
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