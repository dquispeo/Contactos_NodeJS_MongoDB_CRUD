const express = require('express');
const router = express.Router();
const contactos = require('../controllers/contactos');

router.get('/', function(req, res){
    contactos.show(req,res);
});

router.post('/create', function(req, res) {
    contactos.create(req,res);
});

router.get('/show/:id', function(req, res) {
    contactos.detail(req,res);
});

router.put('/update', function(req, res) {
    contactos.update(req,res);
});

router.get('/delete/:id', function(req, res) {
    contactos.delete(req,res);
});

module.exports = router;
