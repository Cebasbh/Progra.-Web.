//Import de librerías
import { Link } from 'react-router-dom';

//Import de components

//Import de types
import type { Stream } from '../GlobalObjects/Objects_DataTypes';

//Import de css
import "../GlobalObjects/Global.css"
import './Streamcard.css';

// Props
interface StreamCardProps {
  stream : Stream
}

const StreamCard = (props: StreamCardProps) => {
  	const DivisiónAproximada = (dividendo : number, divisor : number, decimas : number) => {
        const cociente = dividendo/divisor;
        return(cociente.toFixed(decimas))
    }
	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
			<div className="card-image">
				<Link to={`/streaming`}>
					<img src={props.stream.thumbnail} className="card-img-top stream-card-thumbnail clickable"/>
				<div className="overlay">
					<span className="badge bg-danger">{props.stream.viewers >= 1000000? DivisiónAproximada(props.stream.viewers,1000000,1) + " M ": props.stream.viewers >= 1000? DivisiónAproximada(props.stream.viewers,1000,1) + " K ":props.stream.viewers}viewers</span>
				</div>
				</Link>
			</div>
			<div className="card-body">
				<h6 className="card-title fw-bold">{props.stream.title}</h6>
				<p className="card-text text-muted">{props.stream.streamer.nickname}</p>
			</div>
		</div>
	);
};

export default StreamCard;