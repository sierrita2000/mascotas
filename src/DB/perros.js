import { v4 as uuidv4 } from 'uuid'

export const mascotas = {
    perdidos: [
        {
            id: uuidv4(),
            nombre: 'Rayo',
            tipo: 'perro',
            img: 'https://www.nationalgeographic.com.es/medio/2023/08/25/perro_adf93861_1412331876_230825124420_800x800.jpg',
            rasgos: {
                color: 'negro/blanco',
                edad: '1 año'
            },
            dueno: {
                nombre: 'Jorge',
                direccion: 'Madrid',
                telefono: '666555333'
            },
            info: 'Es un poco tímido, pero ni muerde.'
        },
        {
            id: uuidv4(),
            nombre: 'Ami',
            tipo: 'perro',
            img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=910x10000:format=jpg/path/sf89de8eaa5b92d3f/image/iaddc8b873942eb43/version/1453288727/image.jpg',
            rasgos: {
                color: 'negro/blanco',
                edad: '8 años'
            },
            dueno: {
                nombre: 'Samuel',
                direccion: 'Madrid',
                telefono: '222444111'
            },
            info: 'Es muy buen perro, seguramente esté asustado.'
        },
        {
            id: uuidv4(),
            nombre: 'Bobby',
            tipo: 'gato',
            img: 'https://www.santevet.es/uploads/images/es_ES/razas/gato_callejero_seguro_santevet.jpeg',
            rasgos: {
                color: 'marron/blanco',
                edad: '5 años'
            },
            dueno: {
                nombre: 'Isabel',
                direccion: 'Toledo',
                telefono: '777888999'
            },
            info: 'Gatete muy feliz, avisenme si lo ven.'
        },
        {
            id: uuidv4(),
            nombre: 'Look',
            tipo: 'otro',
            img: 'https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/temas/cerdo-vietnamita.jpg',
            rasgos: {
                color: 'gris',
                edad: '14 años'
            },
            dueno: {
                nombre: 'Pedro',
                direccion: 'Madrid',
                telefono: '666555000'
            },
            info: 'Es un poco tímido, pero ni muerde.'
        }
    ],
    encontrados: [
        {
            id: uuidv4(),
            nombre: 'Bryan',
            tipo: 'otro',
            img: 'https://granjabrenas.com/wp-content/uploads/2022/05/chicken-gcbae383c4_1280-e1652694815826.jpg',
            rasgos: {
                color: 'marron',
                edad: '2 años'
            },
            dueno: {
                nombre: 'Jorge',
                direccion: 'Cuenca',
                telefono: '126732333'
            },
            info: 'Lo encontré en la avenida de la Paz.'
        },
        {
            id: uuidv4(),
            nombre: 'Lucas',
            tipo: 'otro',
            img: 'https://www.diariodesevilla.es/2023/10/16/mascotas/Hurones-mascotas-permitidas-ley-animal_1839426737_194938454_667x375.jpg',
            rasgos: {
                color: 'negro/blanco',
                edad: '4 años'
            },
            dueno: {
                nombre: 'Beatriz',
                direccion: 'Madrid',
                telefono: '839029302'
            },
            info: 'Está bien, lo encontré en la calle Serrano.'
        },
        {
            id: uuidv4(),
            nombre: 'Bolt',
            tipo: 'perro',
            img: 'https://cdn.redcanina.es/wp-content/uploads/2021/05/24105907/perro-salchicha.jpg',
            rasgos: {
                color: 'marrón',
                edad: '5 años'
            },
            dueno: {
                nombre: 'Rosa',
                direccion: 'Madrid',
                telefono: '849375940'
            },
            info: 'Tiene un pequeña herida en la pata que se está curando, Encontrado en Carabanchel.'
        }
    ]
}