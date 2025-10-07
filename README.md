#  Лабораторная работа №1  
## Введение в Express.js. Создание простого приложения "ToDo List"

---

###  Цель работы
- Освоить базовую архитектуру **Express + MVC**.
- Научиться работать с контроллерами, роутами и шаблонизатором Pug.
- Научиться обрабатывать формы (GET/POST) и выполнять redirect после отправки.
- Реализовать простое приложение без базы данных с хранением данных в оперативной памяти.

---

###  Инструкции по запуску проекта

1. Создать проект:
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

3. Добавить скрипты в `package.json`:
   ```json
   "scripts": {
     "start": "node app.js",
     "dev": "nodemon app.js"
   }
   ```

4. Создать `.env` файл:
   ```env
   APP_NAME=TodoApp
   PORT=3000
   NODE_ENV=development
   ```

5. Запустить приложение:
   ```bash
   npm run dev
   ```
   Приложение откроется по адресу [http://localhost:3000](http://localhost:3000)

---

### Структура проекта

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

###  Краткая документация

#### **1. models/todo.js**
Модель хранит данные о задачах в массиве:
```js
let todos = [
  { id: 1, title: 'Изучить Express.js', completed: false },
  { id: 2, title: 'Сделать лабораторную работу', completed: true }
];
```
Методы:
- `getAll()` — возвращает список всех задач.
- `add(title)` — добавляет новую задачу.
- `toggle(id)` — переключает статус выполнения задачи.
- `remove(id)` — удаляет задачу по ID.

#### **2. controllers/todoController.js**
Реализует бизнес-логику:
- Получение списка задач (`GET /`)
- Отображение формы добавления (`GET /new`)
- Добавление новой задачи (`POST /new`)
- Переключение статуса (`POST /:id/toggle`)
- Удаление задачи (`POST /:id/delete`)

#### **3. routes/**
Маршруты связывают запросы с контроллерами. Например:
```js
router.get('/', todoController.listTodos);
router.post('/new', todoController.addTodo);
router.post('/:id/toggle', todoController.toggleTodo);
router.post('/:id/delete', todoController.deleteTodo);
```

#### **4. views/**
Используются шаблоны Pug:
- `layout.pug` — общий макет страниц (header, footer).
- `index.pug` — отображение списка задач.
- `new.pug` — форма добавления новой задачи.
- `about.pug` — статическая страница о проекте.
- `404.pug` — обработка ошибок.

#### **5. public/css/style.css**
Современный минималистичный стиль для страниц и кнопок с плавными переходами, выделением активных элементов и адаптивным дизайном.

---

###  Примеры использования проекта

####  Просмотр списка задач
Отображает все задачи, с возможностью переключения статуса и удаления:
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
**Результат:**
- При клике на «Переключить» задача меняет статус (выполнена / не выполнена).
- При клике на «Удалить» задача исчезает из списка.
- После любого действия происходит автоматическое обновление списка.

<img width="1398" height="1053" alt="Image" src="https://github.com/user-attachments/assets/cbe97af0-f689-42bc-8994-23f93b422566" />

####  Добавление новой задачи
Форма для создания задачи:
```pug
form(action="/new", method="POST")
  input(type="text", name="title", placeholder="Введите задачу", required)
  button(type="submit") Добавить
```
**Результат:**
- После отправки формы происходит редирект на главную страницу.
- Новая задача появляется в начале списка с иконкой ❌ (не выполнена).

####  Статическая страница «О нас»
Переход по `/about` показывает описание приложения и автора:
```pug
h2 О приложении
p Это простое приложение TodoApp, созданное на Express.js.
p Разработано в рамках лабораторной работы №1.
```

####  Страница ошибки 404
При переходе на несуществующий маршрут отображается страница:
```pug
h2 404 — Страница не найдена
a(href="/") Вернуться на главную
```
**Результат:** при вводе несуществующего пути, приложение не падает, а красиво выводит страницу с ошибкой.

---

###  Контрольные вопросы

**1. Чем отличаются HTML-маршруты от REST API?**  
HTML-маршруты возвращают HTML-страницы для отображения пользователю, REST API — JSON-ответы для обмена данными между клиентом и сервером.

**2. Что такое `res.render` и `res.json`?**  
- `res.render()` рендерит HTML-шаблон и возвращает страницу.  
- `res.json()` возвращает JSON-данные, обычно для REST API.

**3. Что такое middleware и зачем используется `express.urlencoded`?**  
Middleware — промежуточные функции между запросом и ответом.  
`express.urlencoded({ extended: true })` используется для парсинга данных форм (`POST`) и сохранения их в `req.body`.

---

###  Использованные источники
1. [Express.js — официальный сайт](https://expressjs.com/)
2. [Pug — документация](https://pugjs.org/)
3. [MDN Web Docs — работа с HTTP и формами](https://developer.mozilla.org/)

---

###  Дополнительно
- Возможность фильтрации задач (все / активные / выполненные).
- Можно добавить сохранение задач в файл или базу данных.
- Приложение легко расширяется до REST API.



