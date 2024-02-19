import { useState } from 'react'
import '../../css/Login/login.css'
import { usuarios } from '../../DB/usuarios'

export default function Login ({ setUsuarioValido }) {

    const [ valido, setValido ] = useState(true)

    const validarUsuario = (e) => {
        e.preventDefault()
        const usuario_form = document.querySelector('.input_usuario').value
        const password_form = document.querySelector('.input_password').value
        const usuario_correcto = usuarios.find( usuario => usuario.user === usuario_form && usuario.password === password_form)
        
        if (usuario_correcto) {
            setUsuarioValido(usuario_correcto)
        } else {
            setValido(false)
            const logo_perro = document.querySelector('.login__login img')
            logo_perro.classList.add('mover_cabeza')
            setTimeout(() => {logo_perro.classList.remove('mover_cabeza')}, 1100)
        } 
    }

    return (
        <div className="login">
            <div className="login__login">
                <img src="../../../logo_perro.png" alt="logo-perro" />
                <form>
                    <span className='span_usuario'>Usuario</span>
                    <input className='input_usuario' type="text" name="usuario" id="usuario" />
                    <span className='span_password'>Contraseña</span>
                    <input className='input_password' type="password" name="password" id="password" />
                    {
                        !valido && <p>* Usuario o contraseña no válidos</p>
                    }
                    <button type="submit" onClick={(e) => validarUsuario(e)}>ACEPTAR</button>
                </form>
            </div>
        </div>
    )
}