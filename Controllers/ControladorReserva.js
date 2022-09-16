export class ControladorReservas{


    constructor(){}

    buscarReservas(request,response){
        response.send("estoy buscando reservas desde el controlador")

    }

    buscarReservasPorId(request,response){
        response.send("estoy buscando una  habitacion por Id desde el controlador")

    }

    registrarReservas(request,response){
        response.send("estoy agregando reservas desde el controlador")

    }

    editarReservas(request,response){
        response.send("estoy editando una reservas desde el controlador")

    }




}