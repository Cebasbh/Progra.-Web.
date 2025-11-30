import { useState } from 'react';
import { useEffect } from 'react';
import PanelHeader from '../components/PanelHeader';
import PanelOptions from '../components/PanelOptions';
import Videos from '../components/ProfileComponents/Videos';
import Analiticas from './Analiticas';
import Configuracion from './Configuracion';
import ConfiguracionNiveles from './ConfiguracionNiveles';
import GestionRegalos from './GestionRegalos';
import type { Stream } from '../GlobalObjects/Objects_DataTypes';
import type { User } from '../GlobalObjects/Objects_DataTypes';
import "./PanelControl.css"

interface PanelControlProps{
  GetUser : () => User | null
  streams : Stream []
  doViewersDivision : (dividendo : number, divisor : number, decimas : number) => string
} 
const PanelControl = (props : PanelControlProps) => {
  const [Isstreaming, SetIsStreaming] = useState<boolean>(false);
  const user = props.GetUser();
  if (!user){
    return(
      <div>
        No deberías estar aquí.
      </div>
    )
  }
  const stream = props.streams.find((stream: Stream) => {
        return stream.user.name === user.name
    })
  useEffect(() => {
    if (stream) {
      SetIsStreaming(true);
    }
  }, [stream]);
  const [seccionActiva, setSeccionActiva] = useState('Stream');

  let contenidoCentral = (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Panel de Control - Stream</h5>
        <p className="text-muted">Controles y vista previa del stream activo.</p>
      </div>
    </div>
  );

  if (seccionActiva === 'Stream') contenidoCentral = (
    <div className="card">
      <div className="card-body p-4 d-flex ">
              <div className="me-3">
                <img className="StreamVisualization" src={stream? stream.thumbnail : "https://whitescreen.online/image/black-background.png" } alt="Acá empieza la magia!" />
              </div>
              <div className='mx-3 d-flex flex-column bd-highlight my-5'>
                <img className="GameVisualization" src={stream? stream.game.photo : "https://static-cdn.jtvnw.net/ttv-boxart/498566-210x280.jpg"} alt="Img" />
                <div className="d-flex mt-auto p-2 bd-highlight justify-content-center">
                      <span className="badge bg-danger ">{stream? stream.viewersnumber >= 1000000? props.doViewersDivision(stream.viewersnumber,1000000,1) + " M ": stream.viewersnumber >= 1000? props.doViewersDivision(stream.viewersnumber,1000,1) + " K ":stream.viewersnumber  : "Desconectado"}viewers</span>
                </div>
              </div>
      </div>
    </div>
  );
  if (seccionActiva === 'Videos') contenidoCentral = <Videos />;
  if (seccionActiva === 'Estadísticas') contenidoCentral = <Analiticas />;
  if (seccionActiva === 'Configuración') contenidoCentral = <Configuracion />;
  if (seccionActiva === 'Regalos') contenidoCentral = <GestionRegalos />;
  if (seccionActiva === 'Niveles') contenidoCentral = <ConfiguracionNiveles />;

  return (
    <div className="container mt-4">
      {
        Isstreaming?
        ""
        :
        <PanelHeader />
      }
      

      <div className="row mt-3">
        <PanelOptions
          opciones={["Stream", "Videos", "Estadísticas", "Regalos", "Niveles"]}
          onSeleccionar={(o) => setSeccionActiva(o)}
        />

        <div className="col-10">
          {contenidoCentral}
        </div>

      </div>
    </div>
  );
};

export default PanelControl;
