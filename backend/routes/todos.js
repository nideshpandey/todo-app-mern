const express = require('express');
const { createTodo, getTodos, getSingleTodo } = require('../controllers/todoController');
const router = express.Router();


//GET all todos
router.get('/', getTodos)

//GET single todo
router.get('/:id', getSingleTodo)

//POST todos
router.post('/', createTodo)

//DELETE todo
router.delete('/:id', (req,res) => {
    res.json({msg: 'DELETE todos'});
})

//UPDATE todo
router.patch('/:id', (req,res) => {
    res.json({msg: 'UPDATE todos'});
})

module.exports = router;