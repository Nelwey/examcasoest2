const {Schema, model} = require('mongoose');
const puestoSchema = new Schema({
  numero:{
    type:Integer,
    required:true
  },
  sector:{
    type:String,
    required:true
  },
  gremio:{
    type:String,
    required:true
  },
  estado:{
    type:String,
  },
  
  contratos:{
    contratoVenta:{
      type:mongoose.Schema.Types.ObjectId, 
      ref:'Contrato',
    },
    contratoAlquiler:{
      type:mongoose.Schema.Types.ObjectId, 
      ref:'Contrato',
    }
  },
 
},{
  timestamps:true
});

module.exports = model('Puesto', puestoSchema);