export class ControladorHabitacion{


    constructor(){}

    buscarHabitaciones(request,response){
        response.send("estoy buscando habitaciones desde el controlador")

    }

    buscarHabitacionesPorId(request,response){
        response.send("estoy buscando una  habitacion por Id desde el controlador")

    }

    registrarHabitacion(request,response){
        response.send("estoy agregando  habitacion desde el controlador")

    }

    editarHabitacion(request,response){
        response.send("estoy editando una habitacion desde el controlador")

    }




}