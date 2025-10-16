import { Link } from 'react-router-dom';
//Import de components

//Import de types
import type { Stream } from '../GlobalObjects/Objects_DataTypes';
//Import de css
import './Streamcard.css';

// Props
interface StreamCardProps {
  stream : Stream
}

const StreamCard = (props: StreamCardProps) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card bg-dark text-white h-100">
        {/* Miniatura del stream */}
        <img
          src={props.stream.thumbnail}
          className="card-img-top stream-card-thumbnail"
          alt={props.stream.title}
        />
        
        {/* Información del stream */}
        <div className="card-body">
          <h6 className="card-title fw-bold">{props.stream.title}</h6>
          <p className="card-text text-muted mb-1">{props.stream.streamer.nickname}</p>
          <p className="card-text">
            <span className="badge bg-danger">{props.stream.viewers.toLocaleString()} viewers</span>
          </p>
          <Link to={`/streaming/${props.stream.id}`} className="btn btn-primary btn-sm w-100">
            Ver Stream
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StreamCard;