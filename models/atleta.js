var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = {
    nombre: {type: String, required: false, unique: false},
    apellido: {type: String, required: false, unique: false},
    nacimiento: {type: Number, required: false, unique: false},
    genero: {type: Number, required: true, unique: false, default: 3},
    equipo: { type: Schema.Types.ObjectId, required: true, ref: 'Equipo'},
    created: {type: Date, required: true, unique: false, default: Date.now},
    modified:  {type: Date, required: true, unique: false, default: Date.now}
};
