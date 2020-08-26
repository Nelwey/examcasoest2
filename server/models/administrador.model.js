const {Schema, model} = require('mongoose');
const Objusuario = {
  nombreUsuario:String,
  password:String,
  tipo:String
}
const administradorSchema = new Schema({
  nombre:{
    type:String,
    required:true
  },
  usuario:Objusuario
 
},{
  timestamps:true
});

module.exports = model('Administrador', administradorSchema);