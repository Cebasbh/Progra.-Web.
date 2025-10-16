 
import VideoPlayer from '../components/VideoPlayer';

const Videos = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Mis videos</h2>
      <div className="row">
        <div className="col-6">
          <VideoPlayer
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="vods"
          />
        </div>
        <div className="col-6">
          <VideoPlayer
            src="https://www.youtube.com/embed/yIr_1CasXkM"
            title="un vod random"
          />
        </div>
      </div>
    </div>
  );
};

export default Videos;
