//Import de librerías
import { useParams } from "react-router-dom";

//Import de componentss
import StreamCard from "../HomeComponents/Streamcard";
import StreamerCard from "./Streamercard"

//Import de types
import type { Stream } from "../../GlobalObjects/Objects_DataTypes";
import type { User } from "../../GlobalObjects/Objects_DataTypes";

//Import de css
import "../../GlobalObjects/Animations.css"
import "../../GlobalObjects/Global.css"

//Props
interface SearchProps{
    streams : Stream[]
	users : User[]
}

const Search = (props : SearchProps) => {
    const { name } = useParams<{ name: string }>();
    const searchedstream = props.streams.filter((stream : Stream)=>{
        return stream.user.name.toUpperCase() === name?.toUpperCase()
    })
	const searcheduser = props.users.filter((user : User)=>{
        return user.name.toUpperCase() === name?.toUpperCase()
    })
	return (
		<div className="container my-5 px-4">
			<h1 className="mb-4">Streams:</h1>
			<div className="row">
				{
                searchedstream.map((stream : Stream) => (
				<StreamCard stream = {stream}></StreamCard>
				))
                }
			</div>
			<h1 className="mb-4">Usuarios:</h1>
			<div className="row">
				{
                searcheduser.map((user : User) => (
				<StreamerCard user = {user}></StreamerCard>
				))
                }
			</div>
		</div>
	);
}

export default Search;