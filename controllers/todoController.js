const Todo = require('../models/todo');

exports.listTodos = (req, res) => {
  const todos = Todo.getAll();
  res.render('index', { title: 'Список задач', todos });
};

exports.newTodoForm = (req, res) => {
  res.render('new', { title: 'Новая задача' });
};

exports.addTodo = (req, res) => {
  const { title } = req.body;
  Todo.add(title);
  res.redirect('/');
};

exports.toggleTodo = (req, res) => {
  const id = parseInt(req.params.id);
  Todo.toggle(id);
  res.redirect('/');
};

exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  Todo.remove(id);
  res.redirect('/');
};