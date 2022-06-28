const express = require('express');
const router = express.Router();

//GET all todos
router.get('/', (req, res) => {
    res.json({name: 'John'})
})

//GET single todo
router.get('/:id', (req, res) => {
    res.json({msg: 'GET single todo'});
})

//POST todos
router.post('/', (req,res) => {
    res.json({msg: 'POST todos'});
})

//DELETE todo
router.delete('/:id', (req,res) => {
    res.json({msg: 'DELETE todos'});
})

//UPDATE todo
router.patch('/:id', (req,res) => {
    res.json({msg: 'UPDATE todos'});
})

module.exports = router;