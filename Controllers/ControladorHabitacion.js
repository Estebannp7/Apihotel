export class ControladorHabitacion{


    constructor(){}

    buscarHabitaciones(request,response){
        try {
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":"AQUI VAN LOS DATOS DE HABITACIONES"
            })  
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta" +error,
                "datos":null
            })
        }
    }

    buscarHabitacionesPorId(request,response){
        try {
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":"AQUI VAN LOS DATOS DE HABITACIONES"
            })  
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta" +error,
                "datos":null
            })
        }
    }

    registrarHabitacion(request,response){
        try {
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":null
            })  
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta" +error,
                "datos":null
            })
        }
    }

    editarHabitacion(request,response){
        try {
            response.status(200).json({
                "mensaje":"exito editanto",
                "datos":null
            })  
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la edicion de habitacion" +error,
                "datos":null
            })
        }

    }




}