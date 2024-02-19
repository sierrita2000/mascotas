import { useEffect, useState } from 'react'
import '../../css/Inicio/inicio.css'
import PaginaVacia from '../PaginaVacia/paginaVacia'
import Header from './header'
import Tarjeta from './tarjeta'

export default function Inicio ({ tipo, mascotas, setSeccionInfo }) {

    const [ cantidad, setCantidad ] = useState(0)

    useEffect(() => {
        setCantidad(mascotas.length)
    }, [mascotas])
    
    return (
        <div className="inicio">
            <Header tipo={tipo}/>

            {
                cantidad > 0 
                    ? (
                        <div className="mascotas">
                            {
                                mascotas.map( mascota => {
                                    return <Tarjeta key={mascota.id} setSeccionInfo={setSeccionInfo} {...mascota}/>
                                })
                            }
                        </div>
                    ) : (
                        <PaginaVacia />
                    )
            }
        </div>
    )
}