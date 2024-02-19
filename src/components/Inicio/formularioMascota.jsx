import { useContext } from 'react'
import '../../css/Inicio/formularioMascota.css'
import { v4 as uuidv4 } from 'uuid'
import { SessionContext } from '../../context/session'

export default function FormularioMascota ({ eleccion, mascotas, setMascotas, setSeccionInfo, setModalAbierto }) {

    const usuario = useContext(SessionContext)

    const addMascota = (e) => {
        e.preventDefault()

        const inputs = document.querySelectorAll('input')
        const textarea = document.querySelector('.formulario_mascota form textarea')

        const nueva_mascota = {
            id: uuidv4(),
            nombre: inputs[0].value,
            tipo: eleccion,
            img: inputs[1].value,
            rasgos: {
                color: inputs[2].value,
                edad: inputs[3].value
            },
            dueno: {
                nombre: usuario.nombre,
                direccion: usuario.direccion,
                telefono: usuario.telefono
            },
            info: textarea.value
        }

        const copia_mascotas = mascotas
        copia_mascotas.push(nueva_mascota)
        setMascotas(copia_mascotas)

        setSeccionInfo(nueva_mascota.id)
        setModalAbierto(false)
    }

    const borrarDatos = (e) => {
        e.preventDefault()

        const inputs = document.querySelectorAll('input')
        const textarea = document.querySelector('.formulario_mascota form textarea')

        inputs.forEach(elem => elem.value = '')
        textarea.value = ''
    }

    return (
        <div className="formulario_mascota">
            <h2>{eleccion.toUpperCase()}</h2>
            <form>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" />
                <label htmlFor="imagen">Imagen</label>
                <input type="text" name="imagen" id="imagen" />
                <label htmlFor="color">Colores</label>
                <input type="text" name="color" id="color" />
                <label htmlFor="edad">Edad</label>
                <input type="text" name="edad" id="edad" />
                <label htmlFor="info">Información extra</label>
                <textarea name="info" id="info"></textarea>
                <section className="formulario_mascota__botones">
                    <button type="submit" onClick={(e) => addMascota(e)}>ACEPTAR</button>
                    <button onClick={(e) => borrarDatos(e)}>BORRAR</button>
                </section>
            </form>
        </div>
    )
}