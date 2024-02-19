import { useState } from 'react'
import '../../css/Menu/menu.css'
import ModalAnadirMascota from '../Inicio/modalAnadirMascota'

export default function Menu ({ tipo, setTipo, seccionInfo, setSeccionInfo, mascotas, setMascotas }) {

    const [ modalAbierto, setModalAbierto ] = useState(false)

    return (
        <div className="menu">
            <button className={`menu__perdidos ${tipo === 'perdidos' ? 'selected' : ''}`} onClick={() => setTipo('perdidos')}>PERDIDOS</button>
            <button className={`menu__encontrados ${tipo === 'encontrados' ? 'selected' : ''}`} onClick={() => setTipo('encontrados')}>ENCONTRADOS</button>
            {
                seccionInfo === null && <button className='menu__anadir' onClick={() => setModalAbierto(true)}>+</button>
            }
            {
                modalAbierto && <ModalAnadirMascota setModalAbierto={setModalAbierto} tipo={tipo} mascotas={mascotas} setMascotas={setMascotas} setSeccionInfo={setSeccionInfo} />
            }
        </div>
    )
}