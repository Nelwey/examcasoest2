const indexCtrl = {};

//render index view
indexCtrl.renderIndex = async  (req, res, next) => {
  res.render('index');
};


module.exports = indexCtrl;