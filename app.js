require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'TodoApp';

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Настраиваем шаблонизатор Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Роуты
const todoRoutes = require('./routes/todoRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const errorController = require('./controllers/errorController');

app.use('/', todoRoutes);
app.use('/', aboutRoutes);

// 404
app.use(errorController.pageNotFound);

app.listen(PORT, () => {
  console.log(`🚀 ${APP_NAME} запущен на http://localhost:${PORT}`);
});