const mongoose = require('mongoose');
const {
  MONGODB_HOST,
  MONGODB_DATABASE
} = process.env;

const MONGODB_URI = 'mongodb+srv://nelwey:nelwey@cluster0-zzplm.mongodb.net/exa-casoest2?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology:true,
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));