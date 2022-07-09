const express = require('express');
const { createTodo, getTodos, getSingleTodo, deleteTodo, updateTodo } = require('../controllers/todoController');
const router = express.Router();


//GET all todos
router.get('/', getTodos)

//GET single todo
router.get('/:id', getSingleTodo)

//POST todos
router.post('/', createTodo)

//DELETE todo
router.delete('/:id', deleteTodo)

//UPDATE todo
router.patch('/:id', updateTodo)

module.exports = router;