//const express = require('express') FORMA VIEJA DE IMPORTAR

import express from 'express'

//traigo libreria que controla variables de entorno
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
console.log(process.env.PORT)

//app es la variable que almacena toda la funcionalidad de express
const app = express()


//ATENDIENDO PETICIONES y RESPONDIENDO

//1. PETICION DE TIPO GET PARA BUSCAR LAS HABITACIONES
app.get('/hoteles/habitaciones', function (req, res) {
  res.send('Estoy buscando todas las habitaciones')
})

//2.PETCION DE TIPO GET PARA BUSCAR HABITACION POR  ID
app.get('/hoteles/habitacion/:id', function (req, res) {
    res.send('Estoy buscando habitacion por id')
  })

  //3. PETICION DE TIPO POST para agregar habitacion en bd
  app.post('/hoteles/habitacion', function (req, res) {
    res.send('estoy agregando una habitacion')
  })

  
//4. PETICION DE TIPO PUT para editar una habitacion
  app.put('/hoteles/modificarhabitacion', function (req, res) {
    res.send('estoy actualizando una habitacion')
  })
  



//ENCENDIENDO EL SERVIDOR 3000
app.listen(process.env.PORT,function(){
    console.log("servidor encendido")
})
