//Import de librerías

//Import de components

//Import de types
import type { Stream } from "../GlobalObjects/Objects_DataTypes"

//Import de css
import "../GlobalObjects/Global.css"
import "./CarouselSlide.css"

// Props
interface CarouselSlideProps{
    slide : Stream
}

const CarouselSlide = (props : CarouselSlideProps) => {
    return(
        <div key={props.slide.id} className={`carousel-item ${props.slide.id === 1 ? "active" : ""}`}>
            <div className="d-flex">
                <div>
                    <img src={props.slide.thumbnail} className="carousel-image" alt={props.slide.title}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{props.slide.title}</h5>
                    <p className="card-text text-muted">{props.slide.streamer.nickname}</p>
                </div>
            </div>
        </div>
    )
}
export default CarouselSlide;