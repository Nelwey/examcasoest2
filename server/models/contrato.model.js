const {Schema, model} = require('mongoose');
idAdministrador = [
  {
    type:Schema.Types.ObjectId, 
    ref:'Administrador'
  }
]
const contratoSchema = new Schema({
  tipoContrato:{
    type:String, //alquiler/venta
    required:true
  },
  idDueño:{
    type:Schema.Types.ObjectId, 
    ref:'Dueño'
  },
  idInquilino:{
    type:Schema.Types.ObjectId, 
    ref:'Inquilino'
  },
  idPuesto:{
    type:Schema.Types.ObjectId, 
    ref:'Puesto',
    required:true
  },
  cuotaMensual:{
    type:Number
  },
  multa:{
    type:Number
  },
  administradores:[
    {
      idAdministrador:{
        type:Schema.Types.ObjectId, 
        ref:'Administrador',
      }
    }
  ]

},{
  timestamps:true
});

module.exports = model('Contrato', contratoSchema);