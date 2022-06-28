const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');

//GET all todos
router.get('/', (req, res) => {
    res.json({name: 'John'})
})

//GET single todo
router.get('/:id', (req, res) => {
    res.json({msg: 'GET single todo'});
})

//POST todos
router.post('/', async (req,res) => {
    const {title, description} = req.body;
    try {
        const todo = await Todo.create({title, description});
        res.status(200).json(todo);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message});
        
    }
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