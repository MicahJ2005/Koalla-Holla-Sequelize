const express = require('express');
const router = express.Router();
const Koalla = require('../models/koalla.model');

// GET - all the koallas
router.get('/', (req, res) => {
  console.log('Get all koallas');
  Koalla.findAll({
    // include: [ { model: Koalla } ]
  })
    .then( koallas => {
      res.send(koallas);
    })
    .catch( error => {
      console.log('Error getting all koallas', error);
      res.sendStatus(500);
    })
})

// Add a Koalla
router.post('/', (req, res) => {
    
  let name = req.body.data.name;
  let gender = req.body.data.gender;
  let age = req.body.data.age;
  let ready_to_transfer = req.body.data.ready_to_transfer;
  let notes = req.body.data.notes;

  console.log(`POST request add Koalla`, req.body.data);
  let newKoalla = Koalla.build({ 
    name: name, 
    gender: gender,
    age: age,
    ready_to_transfer: ready_to_transfer,
    notes: notes
  });
    newKoalla.save()
    .then( koallas => {
      res.sendStatus(200);
    })
    .catch ( error => {
      console.log('Error getting all koallas', error);
      res.sendStatus(500);
    })  
});

// Update an album name by id
router.put('/:id', (req, res) => {
  let id = req.params.id;
  let ready_to_transfer = req.body.ready_to_transfer;
  console.log(`PUT request update Transfer ${id}`, req.body);
  let updates = { 
    ready_to_transfer: true
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