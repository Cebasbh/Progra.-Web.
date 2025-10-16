import { useState } from "react"

import "../pages/Nosotros.css"

import GridIntegrantes, { type Integrante } from "../components/GridIntegrantes"

const personas : Integrante[] = [
    {
        nombre : "Sebastian Balbuena Herrera ",
        cod : 20230286,
        foto :"https://media.licdn.com/dms/image/v2/D5603AQHsygdu-WS_Hg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726353305110?e=1762992000&v=beta&t=K6J4hmsr8KnMpVUFX0I5Hj-m4GMTu8uTS_3eqI7ioXg"

    },
    {
        nombre : "Yusef Barreto Ibrahim",
        cod : 20224518,
        foto :"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"

    },
    {
        nombre : "Victoria Herrera Paredes",
        cod : 20225503,
        foto :"https://media.licdn.com/dms/image/v2/D5603AQFTOWJ35_itMg/profile-displayphoto-shrink_800_800/B56ZZbj7zjGQAc-/0/1745292869268?e=1762992000&v=beta&t=zEN8xQ8p-eWXFMaRPC4pIo8-KmANnxtdy0p2m-VtCoM"

    },
    {
        nombre : "Cossete Mañuico Jauregui",
        cod : 20211606,
        foto :"https://media.licdn.com/dms/image/v2/D4D03AQF8nSNL_IQbNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713766799500?e=1762992000&v=beta&t=q3islIj0kDjVO4QnRoNMTB8zzl84uevzrze_rbbYYxo"

    },
    {
        nombre : "Alvaro Mera Incio",
        cod : 20224973,
        foto :"https://media.licdn.com/dms/image/v2/D4E03AQHZ2tt-uQDjVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726367165738?e=1762992000&v=beta&t=64z4M5IBZ35t2-u4rTozgvLPHIGNrvh1jUoFtRZTn7M"

    },
    {
        nombre : "Melissa Ruíz Delgado",
        cod : 20232637,
        foto :"https://media.licdn.com/dms/image/v2/D4E03AQHdSzZ3tN1JKA/profile-displayphoto-shrink_800_800/B4EZZX5PerHoAc-/0/1745231346341?e=1762992000&v=beta&t=MCPOkuvNqCN6wYGRwGJMaJ4LLfCnD_IHUSa5I5DyNXc"

    }
]

const Nosotros = () => {

    const[Grupo1] = useState<Integrante[]>(personas)

    return <div>

        <div className="seccion px-3">
            <div className="m-5 px-5">
                
                <div className="row contenido">
                    <h1 className="fw-bold mb-5">Sobre Nosotros</h1>
                    {/* izquierda*/}
                    <div className="seccion_contenido  col-md-6  mt-4 ml-5">
                        
                        <h2 className="h4 mb-3">Nuestra Misión</h2>
                            <p>
                                StreamPlatform es la plataforma líder de streaming en vivo que conecta a
                                creadores de contenido con audiencias globales. Nuestra misión es democratizar
                                la transmisión en vivo y hacer que sea accesible para todos.
                            </p>
                            <h2 className="h4 mb-3">¿Qué Ofrecemos?</h2>
                        <ul>
                            <li>Streaming en alta calidad con baja latencia</li>
                            <li>Herramientas para creadores de contenido</li>
                            <li>Sistema de recompensas para espectadores</li>
                            <li>Comunidad activa y moderada</li>
                            <li>Soporte 24/7 para todos los usuarios</li>
                        </ul>
                        

                    </div>
                    {/* derecha*/}
                    <div className="col-md-6 mt-md-0">
                        <div className="mt-5">
                    <div className="card mb-2 bg-primary text-white mt-5">
                        <div className="card-body p-4 text-center">
                            <h2 className="h4 mb-3">Únete a Nuestra Comunidad</h2>
                            <p>Miles de streamers y espectadores ya forman parte de StreamPlatform</p>
                            <a href="/signup" className="btn btn-light btn-lg mt-2">
                            Registrarse Ahora
                            </a>
                        </div>
                        </div>
                </div>
                    
                            </div>
                    
                    
                </div>

                
               
            </div>
            
            
        </div>

        
        
        <div className="container py-3">
            <hr className="w-30 mx-auto border border-2 border-primary"/> 
            <h4 className="text-center py-3 fw-bold">Grupo 1 - Integrantes</h4>
            <GridIntegrantes miembros={Grupo1}/>
        </div>

    </div>    
    
}

export default Nosotros