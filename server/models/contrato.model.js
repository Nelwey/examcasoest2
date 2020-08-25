const {Schema, model} = require('mongoose');
const dueñoSchema = new Schema({
  tipoContrato:{
    type:String,
    required:true
  },
  dueño:{
    type:mongoose.Schema.Types.ObjectId, 
    ref:'Dueño'
  },
  inquilino:{
    type:mongoose.Schema.Types.ObjectId, 
    ref:'Inquilino'
  },
  idPuesto:{
    type:mongoose.Schema.Types.ObjectId, 
    ref:'Puesto',
    required:true
  },
  cuotaMensual:{
    type:Double
  },
  multa:{
    type:Double
  }
},{
  timestamps:true
});

module.exports = model('Contrato', dueñoSchema);