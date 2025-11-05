//Import de librerías

//Import de components
import CarouselSlide from './CarouselSlide';

//Import de types
import type {Stream} from '../GlobalObjects/Objects_DataTypes';

//Import de css
import "../GlobalObjects/Global.css"

// Props
interface CarouselProps {
  slides: Stream[];
}

const Carousel = (props: CarouselProps) => {
    return (
        <div className="d-flex m-4 col-12 col-sm-12 col-md-12 col-lg-12 mb-4">
            <div className="d-flex flex-fill justify-content-center">
                <button className="border" type="button" data-bs-target="#Carousel" data-bs-slide="prev">
                <i className="bi bi-arrow-bar-left"></i>
                </button>

                <div id="Carousel" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner">
                    {props.slides.map((slide) => (
                        <CarouselSlide slide = {slide}></CarouselSlide>
                    ))}
                    </div>
                </div>

                <button className="border" type="button" data-bs-target="#Carousel" data-bs-slide="next">
                    <i className="bi bi-arrow-bar-right"></i>
                </button>
            </div>
        </div>
  );
}

export default Carousel;