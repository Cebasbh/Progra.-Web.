//Import de components
import StreamCard from "./Streamcard"

//Import de types
import type {Stream} from "../GlobalObjects/Objects_DataTypes"

//Import de css

//Props
interface FeedProps {
  streams: Stream[];
}

const Feed = (props: FeedProps) => {
  return (
    <div className="container my-4">
      <h2 className="mb-3 fw-bold">Streams Recomendados</h2>
      
      {/* Grilla responsive */}
      <div className="row">
        {/* Renderizado declarativo con map */}
        {props.streams.map((stream : Stream) => (
          <StreamCard
            stream = {stream}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;