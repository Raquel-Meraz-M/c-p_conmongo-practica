const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/prendas', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB...'))
.catch(err => console.error('No se pudo conectar a MongoDB...', err));


const usuarioSchema = new mongoose.Schema({
  nombre: String,
  edad: Number
});

const Usuario = mongoose.model('Usuario', usuarioSchema);



Usuario.find({ edad: 25 })
  .then(usuarios => {
    console.log(usuarios);
  })
  .catch(err => {
    console.error('Error al realizar la consulta', err);
  });

