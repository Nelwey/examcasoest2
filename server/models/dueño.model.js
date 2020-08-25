const {Schema, model} = require('mongoose');
const dueñoSchema = new Schema({
  nombres:{
    type:String,
    required:true
  },
  apellidos:{
    type:String,
    required:true
  },
  ci:{
    type:String,
    required:true,
    unique:true
  },
  telefono:{
    type:String
  }
},{
  timestamps:true
});

module.exports = model('Dueño', dueñoSchema);