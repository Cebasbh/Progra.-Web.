//Import de components

//Import de types
import type {SlideData} from '../GlobalObjects/Objects_DataTypes';

//Import de css
import './Hero.css';

// Props
interface HeroProps {
  slides: SlideData[];
}

const Hero = (props: HeroProps) => {
  return (
    <div className="container my-4">
      <h2 className="mb-3 fw-bold">Canales en vivo</h2>
      
      {/* Carrusel de Bootstrap */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Indicadores */}
        <div className="carousel-indicators">
          {props.slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {props.slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide.image}
                className="d-block w-100 hero-carousel-image"
                alt={slide.title}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3">
                <h5 className="fw-bold">{slide.title}</h5>
                <p className="mb-0">{slide.channel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Hero;