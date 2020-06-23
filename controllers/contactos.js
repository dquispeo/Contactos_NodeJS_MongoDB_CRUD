const path = require('path');
const Contactos = require('../models/contactos');
const { model } = require('../models/contactos');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/contactos.html'));
};

exports.list = function (req, res) {
    Contactos.find({}).exec(function (err, contactos) {
            if (err) {
                    return res.send(500, err);
            }
            res.render('getcontacto', {
                    contactos: contactos
         });
    });
};

exports.create = function (req, res) {
    var newContacto = new Contactos(req.body);
    console.log(req.body);
    newContacto.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save contactosdb to database');
        } else {
            res.redirect('/contactos/getcontacto');
        }
  });
               };

exports.show = function (req, res) {
        model.find({}, function(err, items){
            if(!err){
                res.json(items)
            }else{
                res.sendStatus(500);
                console.log(err);
            }
        });
};

exports.detail = function(req, res){
    let val_id = req.params.id;
    model.findOne({_id:val_id}, function(err, data){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
            res.json(data);
        }
    });
};

exports.update = function(req, res){
    let val_id = req.body.id;
    let datos = {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        numero : req.body.numero
    };
    model.updateOne({_id:val_id}, datos, function(err, newData){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
            res.json(newData);
        }
    });
};

exports.delete = function(req, res){
    let val_id = req.params.id;
    model.deleteOne({_id:val_id}, function(err){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
            res.sendStatus(200);
        }
    });
};
