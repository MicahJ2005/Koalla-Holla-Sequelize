const express = require('express');
const router = express.Router();
const Koalla = require('../models/koalla.model');

// GET - all the albums
router.get('/', (req, res) => {
  console.log('Get all koallas');
  Koalla.findAll({
    include: [ { model: Koalla } ]
  })
    .then( koallas => {
      res.send(koallas);
    })
    .catch( error => {
      console.log('Error getting all albums', error);
      res.sendStatus(500);
    })
})

// Add a Koalla
router.post('/', (req, res) => {
  let name = req.body.name;
  let gender = req.body.gender;
  let age = req.body.age;
  let ready_to_transfer = req.body.ready_to_transfer;
  let notes = req.body.notes;

  console.log(`POST request add Koalla`, req.body);
  let newKoalla = Koalla.create({ 
    name: name, 
    gender: gender,
    age: age,
    ready_to_transfer: ready_to_transfer,
    notes: notes
  })
    .then( koallas => {
      res.sendStatus(200);
    })
    .catch ( error => {
      console.log('Error getting all albums', error);
      res.sendStatus(500);
    })  
});

// Update an album name by id
router.put('/:id', (req, res) => {
  let id = req.params.id;
  let ready_to_transfer = req.body.ready_to_transfer;
  console.log(`PUT request update Transfer ${id}`, req.body);
  let updates = { 
    ready_to_transfer: ready_to_transfer
  };
  Koalla.update(updates, { where: {id: id }})
    .then( result => {
      res.sendStatus(200);
    })
    .catch ( error => {
      console.log('Error getting all Koallas', error);
      res.sendStatus(500);
    })  
});

// Delete a Koalla by id
router.delete('/:id', (req, res) => {
  let koallaId = req.params.id;
  console.log(`DESTROY request for koalla ${koallaId}`, req.body);
  Koalla.destroy( { where: {id: koallaId }})
    .then( koallas => {
      res.sendStatus(200);
    })
    .catch ( error => {
      console.log('Error DESTROYING Koalla', error);
      res.sendStatus(500);
    })  
});

module.exports = router;