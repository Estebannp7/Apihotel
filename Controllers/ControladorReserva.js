import { ServicioReserva } from '../services/servicioReserva.js'

export class ControladorReservas{


    constructor(){}

   async buscarReservas(request,response){
    let objetoServicioReserva = new ServicioReserva()
        try {
            response.status(200).json({
                "mensaje":"exito en la consulta de reservas",
                "datos":await objetoServicioReserva.buscarReservas()
            })  
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta" +error,
                "datos":null
            })
        }
    }

    async buscarReservasPorId(request,response){
        let id = request.params.idReserva
        let objetoServicioReserva = new ServicioReserva()

        try {
            response.status(200).json({
                "mensaje":"exito en la consulta de reserva" + id,
                "datos": await objetoServicioReserva.buscarReservasPorId(id)
            })  
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta" +error,
                "datos":null
            })
        }
    }

    async registrarReservas(request,response){
        let datosReserva = request.body
        let objetoServicioReserva = new ServicioReserva()


        try {
            await objetoServicioReserva.agregarR(datosReserva)
            response.status(200).json({
                "mensaje":"exito agregando reserva ",
                "datos":null
            })  
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta" +error,
                "datos":null
            })
        }
    }

    async editarReservas(request,response){
        let id = request.params.idHabitacion
        let datosReserva = request.body
        let objetoServicioReserva = new ServicioReserva()
        try {
            await objetoServicioReserva.editarReservas(id,datosReserva)
            response.status(200).json({
                "mensaje":"exito en la edicion" + id,
                "datos":datosReserva
            })  
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta" +error,
                "datos":null
            })
        }
    }




}