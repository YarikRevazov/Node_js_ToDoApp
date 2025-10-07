# 🧾 Лабораторная работа №1  
## Введение в Express.js. Создание простого приложения "ToDo List"

---

### 🎯 Цель работы
- Ознакомиться с базовой связкой **Express + MVC**.
- Научиться обрабатывать формы (GET/POST), передавать данные в шаблоны и делать redirect после успешной отправки.
- Реализовать минимальное приложение без БД с хранением данных в памяти.

---

### ⚙️ Инструкции по запуску проекта

1. Создать папку и инициализировать Node.js проект:
   ```bash
   mkdir todo-app
   cd todo-app
   npm init -y
   ```

2. Установить зависимости:
   ```bash
   npm install express pug dotenv
   npm install --save-dev nodemon
   ```

3. В `package.json` добавить скрипты запуска:
   ```json
   "scripts": {
     "start": "node app.js",
     "dev": "nodemon app.js"
   }
   ```

4. Создать файл `.env`:
   ```env
   APP_NAME=TodoApp
   PORT=3000
   NODE_ENV=development
   ```

5. Запустить проект:
   ```bash
   npm run dev
   ```
   Приложение доступно по адресу [http://localhost:3000](http://localhost:3000)

---

### 🧩 Структура проекта

```
todo-app/
│
├── app.js
├── .env
├── package.json
│
├── controllers/
│   ├── todoController.js
│   ├── aboutController.js
│   └── errorController.js
│
├── models/
│   └── todo.js
│
├── routes/
│   ├── todoRoutes.js
│   └── aboutRoutes.js
│
├── views/
│   ├── layout.pug
│   ├── index.pug
│   ├── new.pug
│   ├── about.pug
│   └── 404.pug
│
└── public/
    └── css/
        └── style.css
```

---

### 📄 Краткая документация

- **models/todo.js** — хранит задачи и методы для работы с ними (`getAll`, `add`, `toggle`, `remove`)
- **controllers/** — бизнес-логика для задач, страницы "О нас" и обработки 404
- **routes/** — маршруты HTTP-запросов
- **views/** — Pug-шаблоны для отображения страниц
- **public/css/** — стили приложения

---

### 💻 Примеры использования

#### Список задач
```pug
ul
  each todo in todos
    li(class=todo.completed ? 'completed' : '')
      span #{todo.title} - #{todo.completed ? '✅' : '❌'}
      form(action='/' + todo.id + '/toggle', method="POST")
        button(type="submit") Переключить
      form(action='/' + todo.id + '/delete', method="POST")
        button(type="submit") Удалить
```

#### Добавление задачи
```pug
form(action="/new", method="POST")
  input(type="text", name="title", placeholder="Введите задачу", required)
  button(type="submit") Добавить
```

---

### 🧠 Контрольные вопросы

**1. Чем отличаются HTML-маршруты от REST API?**  
HTML-маршруты возвращают страницы, а REST API — JSON-данные для клиента.

**2. Что такое res.render и res.json?**  
- `res.render()` — рендерит шаблон в HTML;  
- `res.json()` — возвращает JSON-ответ для API.

**3. Что такое middleware и express.urlencoded?**  
Middleware — промежуточный обработчик запросов.  
`express.urlencoded({ extended: true })` разбирает данные форм и помещает их в `req.body`.

---

### 📚 Использованные источники
1. [Express.js — официальный сайт](https://expressjs.com/)
2. [Pug — документация](https://pugjs.org/)
3. [MDN Web Docs — работа с HTTP и формами](https://developer.mozilla.org/)

---

© 2025, TodoApp (Express.js MVC Demo)

