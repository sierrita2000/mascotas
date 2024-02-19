import { useState, useEffect } from 'react'
import '../../css/InformacionMascotas/infoMascotas.css'
import Header from '../Inicio/header'
import ModalConfirmacion from './modalConfirmacion'

export default function InfoMascotas ({ tipo, mascotas, otrasMascotas, setMascotas, setOtrasMascotas, seccionInfo, setSeccionInfo }) {
    
    const [ mascota, setMascota ] = useState(null)
    const [ infoMostrada, setInfoMostrada ] = useState(-1)
    const [ modal, setModal ] = useState(false)

    useEffect( () => {
        let mascota = null
        if (mascotas.find(m => seccionInfo === m.id)) {
            mascota = mascotas.find(m => seccionInfo === m.id)
        } else {
            mascota = mascotas[0]
        }
        setMascota(mascota)
    }, [tipo])

    const mostrarAnterior = () => {
        const indiceMascota = mascotas.findIndex(m => m.id === mascota.id)
        indiceMascota != 0 && setMascota(mascotas[indiceMascota - 1])
        setInfoMostrada(-1)
    }

    const mostrarSiguiente = () => {
        const indiceMascota = mascotas.findIndex(m => m.id === mascota.id)
        indiceMascota != (mascotas.length - 1) && setMascota(mascotas[indiceMascota + 1])
        setInfoMostrada(-1)
    }
    
    return(
        <div className="info_mascotas">
            <Header tipo={mascota?.nombre} setSeccionInfo={setSeccionInfo}/>
            <section className="mascota">
                <section className="info_mascotas__imagen">
                    <img src={mascota?.img} alt="foto-mascota" />
                    <div className="info_mascotas__imagen__botones">
                        <button className='boton__anterior' onClick={mostrarAnterior}>ANTERIOR</button>
                        <button className='boton__siguiente' onClick={mostrarSiguiente}>SIGUIENTE</button>
                    </div>
                </section>
                <section className="info_mascotas__info">
                    <section className="info_mascotas__info__section">
                        <div className='section__titulo' onClick={() => {
                            infoMostrada === 1 ? setInfoMostrada(-1) : setInfoMostrada(1)
                        }}>
                            <h2>Rasgos físicos</h2>
                            <h2 className={`flecha ${infoMostrada === 1 ? 'flecha__girada' : ''}`}>v</h2>
                        </div>
                        <div className={`section__contenido ${infoMostrada === 1 ? 'section__contenido__mostrada' : ''}`}>
                            <p className="rasgos__color"><b>Color:</b> {mascota?.rasgos.color}</p>
                            <p className="edad"><b>Edad:</b> {mascota?.rasgos.edad}</p>
                        </div>
                    </section>
                    <section className="info_mascotas__info__section">
                        <div className="section__titulo" onClick={() => {
                            infoMostrada === 2 ? setInfoMostrada(-1) : setInfoMostrada(2)
                        }}>
                            <h2>
                                {
                                    tipo === 'perdidos' ? 'Información Dueño' : 'Información Persona'
                                }
                            </h2>
                            <h2 className={`flecha ${infoMostrada === 2 ? 'flecha__girada' : ''}`}>v</h2>
                        </div>
                        <div className={`section__contenido ${infoMostrada === 2 ? 'section__contenido__mostrada' : ''}`}>
                            <p className='dueno__nombre'><b>Nombre:</b> {mascota?.dueno.nombre}</p>
                            <p className='dueno__direccion'><b>Dirección:</b> {mascota?.dueno.direccion}</p>
                            <p className='dueno__telefono'><b>Teléfono:</b> {mascota?.dueno.telefono}</p>
                        </div>
                    </section>
                    <section className="info_mascotas__info__section">
                        <div className="section__titulo" onClick={() => {
                            infoMostrada === 3 ? setInfoMostrada(-1) : setInfoMostrada(3)
                        }}>
                            <h2>Información Extra</h2>
                            <h2 className={`flecha ${infoMostrada === 3 ? 'flecha__girada' : ''}`}>v</h2>
                        </div>
                        <div className={`section__contenido ${infoMostrada === 3 ? 'section__contenido__mostrada' : ''}`}>
                            <p className="extra__info">{mascota?.info}</p>
                        </div>
                    </section>
                    <button className='boton_encontrado' onClick={() => setModal(!modal)}>
                        <p>
                            { tipo === 'perdidos' ? 'ENCONTRADO' : 'RECUPERADO'}
                        </p>
                    </button>
                </section>
            </section>
            {
                modal && <ModalConfirmacion setModal={setModal} setSeccionInfo={setSeccionInfo} setMascotas={setMascotas} setOtrasMascotas={setOtrasMascotas} mascota={mascota} mascotas={mascotas} otrasMascotas={otrasMascotas} tipo={tipo}/>
            }
        </div>
    )
}