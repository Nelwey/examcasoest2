const {Schema, model} = require('mongoose');

var Administrador = {
  idAdministrador:{
    type: Schema.Types.ObjectId, 
    ref:'Administrador'
  }
};

const contratoSchema = new Schema({
  tipoContrato:{
    type:String, //alquiler/venta
    required:true
  },
  idDueno:{
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
    type:Number,
    required:true
  },
  multa:{
    type:Number,
    required:true
  },
  administradores:[Administrador]
  

},{
  timestamps:true
});

module.exports = model('Contrato', contratoSchema);