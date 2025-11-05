// routes/AppRouter.tsx
// Configuración de todas las rutas de la aplicación

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import ExploreTags from '../pages/ExploreTags';
import ExploreGames from "../pages/ExploreGames"
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import PrivateRoute from './PrivateRoute';
import TyC from '../pages/TyC';
import Nosotros from '../pages/Nosotros';
import PanelControl from '../pages/PanelControl';
import ConvertirseCreador from '../pages/ConvertirseCreador';
import Streaming from '../pages/Streaming';
import PackMonedas from '../pages/PackMonedas';
import PasarelaPago from '../pages/PasarelaPago';
import GestionRegalos from '../pages/GestionRegalos';
import type { Stream } from '../components/GlobalObjects/Objects_DataTypes';
import type { Tag } from '../components/GlobalObjects/Objects_DataTypes';
import type { Game } from '../components/GlobalObjects/Objects_DataTypes';

interface AppRouterProps {
	streams: Stream[]
	tags: Tag[]
	games: Game[]
}

const AppRouter = (props : AppRouterProps) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="pages d-flex flex-column min-vh-100">
          {/* Navbar visible en todas las páginas */}
          <NavBar></NavBar>
          
          {/* Contenedor principal para las rutas */}
          <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home recommendedstreams={props.streams}/>} />
            <Route path="/exploretags" element={<ExploreTags tags={props.tags}/>}/>
			
            <Route path="/exploretags/:name" element={<ExploreGames games={props.games}/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/TyC" element={<TyC/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/PackMonedas" element={<PackMonedas/>}/>
            <Route path="/PasarelaPago" element={<PasarelaPago/>}/>

            <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
            <Route path="/panelcreador" element={<PrivateRoute><PanelControl/></PrivateRoute>}/>
            <Route path="/convertirse-creador" element={<PrivateRoute><ConvertirseCreador/></PrivateRoute>}/>
            <Route path="/gestion-regalos" element={<PrivateRoute><GestionRegalos/></PrivateRoute>}/>
            
            {/* Ruta de visualización de streaming */}
            <Route path="/streaming" element={<Streaming streams={props.streams}/>} />
            
            {/* Ruta 404 - redirige al home */}
            <Route path="*" element={<Home recommendedstreams={props.streams}/>} />
          </Routes>
        </main>
        <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default AppRouter;
