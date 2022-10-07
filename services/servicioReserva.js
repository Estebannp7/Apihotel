import { ModeloReserva } from "../Models/ModeloReserva.js";


export class ServicioReserva{
    // AQUI PROGRAMO METODOS PARA CADA DE UNA DE LA CONSULTAS QUE QUIERO HACER EN LA BD
async buscarReservas(){
let reservas = await  ModeloReserva.find()
return reservas
}

async buscarReservasPorId(id){
let reserva = await ModeloReserva.findById(id)
return reserva
}

async agregarR(datos){
    let datosValidados = new ModeloReserva(datos)
     return await datosValidados.save()
}

editarHabitacion(id,datos){

    return ModeloReserva.findByIdAndUpdate(id,datos)

}

}