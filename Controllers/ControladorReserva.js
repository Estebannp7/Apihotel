export class ControladorReservas{


    constructor(){}

    buscarReservas(request,response){
        try {
            response.status(200).json({
                "mensaje":"exito en la consulta de reservas",
                "datos":"AQUI VAN LOS DATOS DE LAS RESERVAS"
            })  
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta" +error,
                "datos":null
            })
        }
    }

    buscarReservasPorId(request,response){
        try {
            response.status(200).json({
                "mensaje":"exito en la consulta de reserva",
                "datos":"AQUI VAN LOS DATOS DE LA RESERVA"
            })  
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta" +error,
                "datos":null
            })
        }
    }

    registrarReservas(request,response){
        try {
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

    editarReservas(request,response){
        response.send("estoy editando una reservas desde el controlador")
        try {
            response.status(200).json({
                "mensaje":"exito en la edicion",
                "datos":null
            })  
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta" +error,
                "datos":null
            })
        }
    }




}