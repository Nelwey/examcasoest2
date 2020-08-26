const {Schema, model} = require('mongoose');
const puestoSchema = new Schema({
  numero:{
    type:Number,
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
  contratos:[
    {
      idContrato:{
        type:Schema.Types.ObjectId, 
        ref:'Contrato',
      }
    }
  ]
 
},{
  timestamps:true
});

module.exports = model('Puesto', puestoSchema);