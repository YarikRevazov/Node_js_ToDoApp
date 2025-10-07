const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.listTodos);
router.get('/new', todoController.newTodoForm);
router.post('/new', todoController.addTodo);
router.post('/:id/toggle', todoController.toggleTodo);
router.post('/:id/delete', todoController.deleteTodo);

module.exports = router;