const dueñoCtrl = {};
const Dueño = require('../models/dueño.model');

//render dueño view
dueñoCtrl.renderDueñoView = async (req , res) => {
  const duenos = await Dueño.find({});
  res.render('dueno/gestionDueno', {duenos});
}
//create
dueñoCtrl.createDueño = async ( req, res ) => {
  try {
    const {nombres,apellidos,ci,telefono} = req.body;
    const dueñoSchema = new Dueño({nombres,apellidos,ci,telefono});
    const newDueño = await dueñoSchema.save();
    if(!newDueño){
      req.flash('error_msg', 'Error al crear el registro');
      return res.redirect('/dueno');
    }else{
      req.flash('success_msg', 'Creado Exitosamente!');
      res.redirect('/dueno');
    }
  } catch (error) {
    req.flash('error_msg', 'Error al crear el registro');
    return res.redirect('/dueno');
  }
}


//read

//update

//delete

module.exports = dueñoCtrl;