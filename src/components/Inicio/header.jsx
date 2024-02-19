import { useContext } from 'react'
import '../../css/Inicio/header.css'
import { SessionContext } from '../../context/session'

export default function Header ({ tipo, setSeccionInfo }) {

    const usuario = useContext(SessionContext)

    return (
        <div className="header">
            <section className="nombre">
                {
                    setSeccionInfo && (
                        <button onClick={() => setSeccionInfo(null)}>X</button>
                    )
                }
                <h1>{tipo}</h1>
            </section>
            <section className="logo_usuario">
                <p>{usuario.user}</p>
                <div className='circulo_usuario'></div>
                <img src="../../logo_perro.png" alt="logo-perro" />
            </section>
        </div>
    )
}