//Import de librerías

//Import de components
import Feed from '../components/HomeComponents/Feed';
import Carousel from '../components/HomeComponents/Carousel';

//Import de types
import type { Stream } from '../components/GlobalObjects/Objects_DataTypes';

//Import de css
import "../components/GlobalObjects/Animations.css"
import "../components/GlobalObjects/Global.css"

//Props
interface HomeProps {
    recommendedstreams : Stream[]
}
const Home = (props : HomeProps) => {
  return (
    <div>
        <Carousel slides={props.recommendedstreams} />
        <Feed streams={props.recommendedstreams} />
    </div>
  );
};

export default Home;