import Hero from '../components/HomeComponents/Hero';
import Feed from '../components/HomeComponents/Feed';
import type { Stream } from '../components/GlobalObjects/Objects_DataTypes';
interface HomeProps {
    recommendedstreams : Stream[]
}
const Home = (props : HomeProps) => {
  // Datos mock (movidos desde App.tsx)
  const heroSlides = [
    {
      id: 1,
      image: '',
      title: 'Titulo',
      channel: 'Canal 1'
    },
    {
      id: 2,
      image: '',
      title: 'Titulo',
      channel: 'Canal 1'
    },
    {
      id: 3,
      image: '',
      title: 'Titulo',
      channel: 'Canal 1'
    },
  ];

  return (
    <>
      <Hero slides={heroSlides} />
      <Feed streams={props.recommendedstreams} />
    </>
  );
};

export default Home;