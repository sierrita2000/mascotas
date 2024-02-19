import { useState } from 'react'
import '../../css/Inicio/modalAnadirMascota.css'
import FormularioMascota from './formularioMascota'

export default function ModalAnadirMascota ({ setModalAbierto, tipo, mascotas, setMascotas, setSeccionInfo }) {

    const [ eleccion, setEleccion ] = useState('')

    return (
        <div className="modal_mascota_nueva">
            <div className="modal_mascota_nueva__modal">
                <section className="modal_mascota_nueva__modal__botones">
                    {
                        eleccion != '' && (
                            <button onClick={() => setEleccion('')}>
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                        )
                    }
                    <button onClick={() => setModalAbierto(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </section>
                {
                    eleccion === ''
                        ? (
                            <>
                                <p className='modal_mascota_nueva__modal__pregunta'>
                                    {
                                        tipo === 'perdidos'
                                            ? (
                                                '¿Qué has perdido?'
                                            ) : (
                                                '¿Qué has encontrado?'
                                            )
                                    }
                                </p>
                                <section className="modal_mascota_nueva__modal__opciones">
                                    <button value='perro' onClick={(e) => setEleccion(e.target.value)}>PERRO</button>
                                    <button value='gato' onClick={(e) => setEleccion(e.target.value)}>GATO</button>
                                    <button value='otro' onClick={(e) => setEleccion(e.target.value)}>OTRO</button>
                                </section>
                            </>
                        ) : (
                            <FormularioMascota eleccion={eleccion} mascotas={mascotas} setMascotas={setMascotas} setSeccionInfo={setSeccionInfo} setModalAbierto={setModalAbierto} />
                        )
                }
            </div>
        </div>
    )
}