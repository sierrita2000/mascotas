import '../../css/Inicio/tarjeta.css'

export default function Tarjeta ({ id, nombre, tipo, img, rasgos, setSeccionInfo }) {
    return (
        <div className="tarjeta"  onClick={() => setSeccionInfo(id)}>
            <div className="tarjeta__imagen">
                <img src={img} alt="imagen-mascota" />
            </div>
            <div className="tarjeta__info">
                <h2>{nombre}</h2>
                <h3>- {tipo} -</h3>
                <p className='tarjeta__info__color'><b>Color:</b> {rasgos.color}</p>
                <p className='tarjeta__info__edad'><b>Edad:</b> {rasgos.edad}</p>
            </div>
        </div>
    )
}