// models/todo.js
let todos = [
  { id: 1, title: 'Изучить Express.js', completed: false },
  { id: 2, title: 'Сделать лабораторную работу', completed: true }
];

function getAll() {
  return todos;
}

function add(title) {
  const newTodo = { id: Date.now(), title, completed: false };
  todos.push(newTodo);
}

function toggle(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.completed = !todo.completed;
}

function remove(id) {
  todos = todos.filter(t => t.id !== id);
}

module.exports = { getAll, add, toggle, remove };