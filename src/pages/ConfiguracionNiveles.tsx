import { useState } from 'react'
import type { Nivel } from '../css/types'
import { FilaNivel } from './FilaNivel'

export const ConfiguracionNiveles = function(){
  const nivelesIniciales: Nivel[] = [
    { id: 1, nombre: 'Bronce', puntosRequeridos: 100, recompensa: 'Badge Bronce' },
    { id: 2, nombre: 'Plata', puntosRequeridos: 250, recompensa: 'Badge Plata' },
    { id: 3, nombre: 'Oro', puntosRequeridos: 500, recompensa: 'Badge Oro' },
    { id: 4, nombre: 'Platino', puntosRequeridos: 1000, recompensa: 'Badge Platino' },
    { id: 5, nombre: 'Diamante', puntosRequeridos: 2000, recompensa: 'Badge Diamante' },
  ];

  const [niveles, setNiveles] = useState<Nivel[]>(nivelesIniciales);

  // Agregar nuevo nivel
  const agregarNivel = () => {
    const nuevoId = niveles.length + 1
    setNiveles([
      ...niveles,
      { id: nuevoId, nombre: `Nivel ${nuevoId}`, puntosRequeridos: 0, recompensa: '' },
    ])
  }

  // Actualizar datos de un nivel desde FilaNivel
  const actualizarNivel = (id: number, campo: keyof Nivel, valor: string | number) => {
    const nuevosNiveles = niveles.map(nivel =>
      nivel.id === id ? { ...nivel, [campo]: valor } : nivel
    )
    setNiveles(nuevosNiveles)
  }

  // Guardar cambios (solo simulado)
  const guardarCambios = () => {
    console.log('Niveles guardados:', niveles)
  }

  return (
    <div className="container my-4">
      <h4 className="mb-3">Configuración de Niveles de Lealtad</h4>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Puntos Requeridos</th>
              <th>Recompensa</th>
            </tr>
          </thead>
          <tbody>
            {niveles.map(nivel => (
              <FilaNivel
                key={nivel.id}
                nivel={nivel}
                onActualizar={actualizarNivel}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex mt-3">
        <button className="btn btn-success me-2" onClick={agregarNivel}>
          + Agregar Nivel
        </button>
        <button className="btn btn-primary" onClick={guardarCambios}>
          Guardar Cambios
        </button>
      </div>
    </div>
  )
  
}
export default ConfiguracionNiveles;

