// contatoModel.js
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
// Setup schema
var contatoSchema = mongoose.Schema({
    nome: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export contato model
var Contato = module.exports = mongoose.model('contato', contatoSchema);
module.exports.get = function (callback, limit) {
    Contato.find(callback).limit(limit);
}