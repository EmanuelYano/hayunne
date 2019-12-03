// contatoController.js
// Import contato model
Contato = require('../model/contatoModel.js');
// Handle index actions
exports.index = function (req, res) {
    Contato.get(function (err, contatos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contatos retrieved successfully",
            data: contatos
        });
    });
};
// Handle create contato actions
exports.new = function (req, res) {
    var contato = new Contato();
    contato.nome = req.body.nome ? req.body.nome : contato.nome;
    contato.senha = req.body.senha;
    contato.email = req.body.email;
// save the contato and check for errors
    contato.save(function (err) {
        if (err)
             res.json(err);
        res.json({
            message: 'New contato created!',
            data: contato
        });
    });
};
// Handle view contato info
exports.view = function (req, res) {
    Contato.findById(req.params.contato_id, function (err, contato) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contato details loading..',
            data: contato
        });
    });
};
// Handle update contato info
exports.update = function (req, res) {
Contato.findById(req.params.contato_id, function (err, contato) {
        if (err)
            res.send(err);
contato.name = req.body.name ? req.body.name : contato.name;
        contato.gender = req.body.gender;
        contato.email = req.body.email;
        contato.phone = req.body.phone;
// save the contato and check for errors
        contato.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contato Info updated',
                data: contato
            });
        });
    });
};
// Handle delete contato
exports.delete = function (req, res) {
    Contato.remove({
        _id: req.params.contato_id
    }, function (err, contato) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contato deleted'
        });
    });
};

exports.login = function (req, res){
    Contato.findOne({email:req.body.email, senha:req.body.senha}, function (erro, usuario){
        if(erro)
                res.send(erro);
        res.json({
            usuario
        });
    });
};