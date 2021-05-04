
const CANT_CONTACTOS = 20
const nombres = ["Ana", "Alberto", "Ariel", "Bernardo", "Claudia", "Celeste", "Roberto", "Tracy"]
const apellidos =["Darin", "Gimenez", "Casan", "Fort", "Lobato", "Spinetta", "Fontanarrosa", "Pique"]

const random =(max, min=0) => Math.floor(Math.random() * (max-min)) + min

const generarNombre =() => `${nombres[random(7)]}  ${apellidos[random(7)]}`
const generarTelefono =() => random(999,100) + '-' + random(999,100) + '-' + random(9999,1000)


const crearContacto =() => {
    return {
        nombre: generarNombre(),
        telefono: generarTelefono()
    }
}

export default Array.from({length:CANT_CONTACTOS}, crearContacto)

