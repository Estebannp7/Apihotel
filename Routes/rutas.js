import express from 'express'
import { ControladorReservas } from '../Controllers/ControladorReserva.js'
let controladorReservas = new ControladorReservas()
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
let controladorHabitacion = new ControladorHabitacion()// usando el controlador
export let rutasPersonalizadas=express.Router()


rutasPersonalizadas.get('/hoteles/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hoteles/habitacion/:id',controladorHabitacion.buscarHabitacionesPorId )
rutasPersonalizadas.post('/hoteles/habitacion', controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hoteles/modificarhabitacion', controladorHabitacion.editarHabitacion)



rutasPersonalizadas.get('/hoteles/reservas',controladorReservas.buscarReservas)
rutasPersonalizadas.get('/hoteles/reserva/:id',controladorReservas.buscarReservasPorId)
rutasPersonalizadas.post('/hoteles/reserva',controladorReservas.registrarReservas)
rutasPersonalizadas.put('/hoteles/modificoreserva',controladorReservas.editarReservas)