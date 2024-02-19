import { useEffect, useState } from 'react'
import './App.css'
import Inicio from './components/Inicio/inicio'
import { mascotas } from './DB/perros'
import Menu from './components/Menu/menu'
import InfoMascotas from './components/InformacionMascotas/infoMascotas'
import Login from './components/Login/login'
import { SessionContext } from './context/session'

function App() {

  const [ tipo, setTipo ] = useState('perdidos')
  const [ seccionInfo, setSeccionInfo ] = useState(null) // se le pasa el id de la mascota clickada
  const [ perdidos, setPerdidos ] = useState([])
  const [ encontrados, setEncontrados ] = useState([])
  const [ usuarioValido, setUsuarioValido ] = useState(null)

  useEffect (() => {
    setPerdidos(mascotas.perdidos)
    setEncontrados(mascotas.encontrados)
  }, [])

  return (
    <SessionContext.Provider value={usuarioValido}>
      {
        usuarioValido != null
          ? (
            <>
              {
                !seccionInfo 
                  ?
                    <Inicio tipo={tipo} mascotas={tipo === 'perdidos' ? perdidos : encontrados} setSeccionInfo={setSeccionInfo}/> 
                  :
                    <InfoMascotas tipo={tipo} mascotas={tipo === 'perdidos' ? perdidos : encontrados} otrasMascotas={tipo != 'perdidos' ? perdidos : encontrados} setMascotas={tipo === 'perdidos' ? setPerdidos : setEncontrados} setOtrasMascotas={tipo != 'perdidos' ? setPerdidos : setEncontrados} seccionInfo={seccionInfo} setSeccionInfo={setSeccionInfo}/>
              }
              <Menu tipo={tipo} setTipo={setTipo} seccionInfo={seccionInfo} setSeccionInfo={setSeccionInfo} mascotas={tipo === 'perdidos' ? perdidos : encontrados} setMascotas={tipo === 'perdidos' ? setPerdidos : setEncontrados}/>
            </>
          ) : (
            <Login setUsuarioValido={setUsuarioValido}/>
          )
      }
      </SessionContext.Provider>
  )
}

export default App
