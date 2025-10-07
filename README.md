# 🧞‍Ὃb Лабораторная работа №1

## Введение в Express.js. Создание простого приложения "ToDo List"

---

### 🌟 Цель работы

* Ознакомиться с базовой связкой Express + MVC.
* Научиться обрабатывать формы (GET/POST), передавать данные в шаблоны и делать redirect после успешной отправки.
* Реализовать минимальное приложение без БД с хранением данных в памяти.

---

### 🔧 Инструкции по запуску проекта

1. Создать папку и инициализировать Node.js проект:

      mkdir todo-app
   cd todo-app
   npm init -y
   

2. Установить зависимости:

      npm install express pug dotenv
   npm install --save-dev nodemon
   

3. В package.json добавить скрипты запуска:

      "scripts": {
     "start": "node app.js",
     "dev": "nodemon app.js"
   }
   

4. Создать файл .env:

      APP_NAME=TodoApp
   PORT=3000
   NODE_ENV=development
   

5. Запустить проект:

      npm run dev
   

   Приложение доступно по адресу [http://localhost:3000](http://localhost:3000)

---

### 🖊 Краткая документация проекта

#### Модель: models/todo.js

* Хранит массив задач в памяти.
* Методы: getAll(), add(title), toggle(id), remove(id).

#### Контроллеры:

* todoController.js — логика создания, изменения и удаления задач.
* aboutController.js — отображение статической страницы «О нас».
* errorController.js — обработка ошибок 404.

#### Роуты:

* / — список задач;
* /new — форма добавления;
* /:id/toggle — переключение статуса;
* /:id/delete — удаление;
* /about — статичная страница.

#### Шаблоны (Pug):

* layout.pug — общий макет;
* index.pug — список задач;
* new.pug — форма создания;
* about.pug — страница «О нас»;
* 404.pug — ошибка 404.

---

### 📊 Примеры использования

#### Список задач

ul
  each todo in todos
    li(class=todo.completed ? 'completed' : '')
      span #{todo.title} - #{todo.completed ? '✅' : '❌'}
      form(action='/' + todo.id + '/toggle', method="POST")
        button(type="submit") Переключить
      form(action='/' + todo.id + '/delete', method="POST")
        button(type="submit") Удалить

#### Форма добавления

form(action="/new", method="POST")
  input(type="text", name="title", placeholder="Введите задачу", required)
  button(type="submit") Добавить

---

### 🧠 Ответы на контрольные вопросы

1. Чем отличаются HTML-маршруты от REST API?
HTML-маршруты возвращают готовую страницу (view), а REST API — данные (JSON) для других приложений или фронтенда.

2. Что такое `res.render` и `res.json`?

* res.render() — отображает шаблон и генерирует HTML; используется для страниц.
* res.json() — возвращает JSON; используется для API-запросов.

3. Что такое middleware в Express и зачем `express.urlencoded`?
Middleware — это промежуточные функции, которые выполняются между запросом и ответом.
express.urlencoded({ extended: true }) парсит данные форм (POST) и сохраняет их в req.body.

---

### 🔗 Использованные источники

1. [Express.js — Официальная документация](https://expressjs.com/)
2. [Pug — Шаблонизатор для Node.js](https://pugjs.org/)
3. [MDN Web Docs — Работа с HTTP и формами](https://developer.mozilla.org/)
4. Учебные материалы курса по Node.js и Express

---

### 💡 Дополнительно

* Возможность фильтрации задач по статусу (all / active / completed).
* Потенциал расширения: подключение базы данных (MongoDB, PostgreSQL) или реализация REST API.

---

© 2025, TodoApp (Express.js MVC Demo)
