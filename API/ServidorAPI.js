import express from 'express'
import { rutasPersonalizadas } from '../Routes/rutas.js' 
export class ServidorAPI{

constructor(){
    this.app = express()
    this.atenderPeticiones()
}
//METODOS DE LA CLASE
//ENCENDIENDO EL SERVIDOR 3000
despertarServidor(){
   this.app.listen(process.env.PORT,function(){
        console.log("servidor encendido")
    })
    
}

atenderPeticiones(){

this.app.use('/',rutasPersonalizadas)
}

conectarConBD(){}
}