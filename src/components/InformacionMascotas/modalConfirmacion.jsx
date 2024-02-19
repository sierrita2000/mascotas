import { useContext, useEffect, useState } from 'react'
import '../../css/InformacionMascotas/modalConfirmacion.css'
import { SessionContext } from '../../context/session'

export default function ModalConfirmacion ({ setModal, setSeccionInfo, setMascotas, setOtrasMascotas, mascota, mascotas, otrasMascotas, tipo }) {

    const [ mascotaPropia, setMascotaPropia ] = useState(false)

    const usuario = useContext(SessionContext)

    useEffect ( () => {
        tipo === 'encontrados' && setMascotaPropia(true)
    }, [])
    
    const eliminarMascota = () => {
        const mascota_eliminar = mascotas.findIndex(m => m.id === mascota.id)
        
        const mascotas_nuevas = mascotas
        mascotas_nuevas.splice(mascota_eliminar, 1)
        setMascotas(mascotas_nuevas)

        if(!mascotaPropia) {
            const nuevas_otras_mascotas = otrasMascotas

            const info_extra = document.querySelector('.modal__modal textarea').value

            mascota.dueno.nombre = usuario.nombre
            mascota.dueno.direccion = usuario.direccion
            mascota.dueno.telefono = usuario.telefono
            mascota.info = info_extra

            nuevas_otras_mascotas.push(mascota)
            setOtrasMascotas(nuevas_otras_mascotas)
        } 

        setSeccionInfo(null)
    }

    return (
        <div className="modal">
            <div className="modal__modal">
                {
                    tipo === 'perdidos' && (
                        <>
                            <section className="modal__pregunta_propiedad">
                                <label htmlFor="propiedad">¿Es suya la mascota?</label>
                                <input type="checkbox" name="propiedad" id="propiedad" onChange={() => setMascotaPropia(!mascotaPropia)}/>
                            </section>
                            <p className="advertencia">
                                * Si la mascota no es suya, no marque la casilla y se añadirá automáticamente a la lista de mascotas encontradas.
                            </p>
                            {
                                !mascotaPropia && <textarea name="info_extra" id="info_extra" placeholder='Escriba aquí información extra, como dónde lo encontró y en que estado.'></textarea>
                            }
                        </>
                    )
                }
                
                <p className="modal__texto">
                    {
                        tipo === 'perdidos'
                            ? "¿Quieres confirmar que has encontrado esta mascota?" 
                            : "¿Quieres confirmar que has recuperado esta mascota?" 
                    }
                </p>
                <section className="modal__botones">
                    <button onClick={eliminarMascota}>ACEPTAR</button>
                    <button onClick={() => setModal(false)}>CANCELAR</button>
                </section>
            </div>
        </div>
    )
}