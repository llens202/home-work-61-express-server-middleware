# Express Server — Middleware

## Опис проєкту

Навчальний сервер, створений за допомогою Node.js та Express.js. Сервер обробляє HTTP-запити для головного маршруту, користувачів і статей.

У проєкті реалізовано мідлвари для логування запитів, базової перевірки авторизації, валідації даних користувача, контролю доступу до маршрутів статей, управління сесіями та централізованої обробки помилок.

Проєкт має модульну структуру MVC: маршрути, контролери та мідлвари зберігаються в окремих файлах.

## Технології

- Node.js
- Express.js
- express-session
- npm
- JavaScript (ES Modules)

## Встановлення

1. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/llens202/home-work-61-express-server-middleware
   ```

2. Перейдіть до папки проєкту:

   ```bash
   cd home-work-61-express-server-middleware
   ```

3. Встановіть залежності:

   ```bash
   npm install
   ```

## Запуск сервера

Виконайте команду:

```bash
node server.js
```

Сервер працює на порту `3000`.

Базова адреса: http://localhost:3000

## Маршрути

### Головний маршрут

| Метод | Шлях | Відповідь |
|---|---|---|
| GET | `/` | `Get root route` |

### Користувачі

Для доступу до маршрутів користувачів потрібно передати заголовок `Authorization`.

| Метод | Шлях | Відповідь |
|---|---|---|
| GET | `/users` | `Get users route` |
| POST | `/users` | `Post user route` |
| GET | `/users/:userId` | `Get user by ID route: {userId}` |
| PUT | `/users/:userId` | `Put user by ID route: {userId}` |
| DELETE | `/users/:userId` | `Delete user by ID route: {userId}` |

Для запиту `POST /users` у форматі JSON потрібно передати поля `username` і `password`.

Приклад тіла запиту:

```json
{
  "username": "Yaroslav",
  "password": "abc123"
}
```

Якщо одне з обов'язкових полів відсутнє, сервер повертає статус `400` і повідомлення:

`Missing required fields: username and password`

Якщо заголовок `Authorization` відсутній, сервер повертає статус `401` і повідомлення:

`Access denied. No credentials sent.`

### Статті

Для доступу до маршрутів статей потрібно передати заголовок `Authorization`.

| Метод | Шлях | Відповідь |
|---|---|---|
| GET | `/articles` | `Get articles route` |
| POST | `/articles` | `Post article route` |
| GET | `/articles/:articleId` | `Get article by id route: {articleId}` |
| PUT | `/articles/:articleId` | `Put article by id route: {articleId}` |
| DELETE | `/articles/:articleId` | `Delete article by id route: {articleId}` |

Якщо заголовок `Authorization` відсутній, сервер повертає статус `403` і повідомлення:

`Access forbidden. No permission to access articles.`

### Приклад заголовка авторизації

У Postman на вкладці **Headers** додайте:

| Key | Value |
|---|---|
| `Authorization` | `test123` |

У поточній навчальній реалізації перевіряється лише наявність заголовка, а не справжність облікових даних чи реальні права користувача.

## Мідлвари

- `logRequests` — записує дату, час, HTTP-метод і URL запиту в термінал.
- `basicAuth` — перевіряє наявність заголовка `Authorization` для маршрутів користувачів.
- `validateUserInput` — перевіряє наявність обов'язкових полів `username` і `password`.
- `checkArticleAccess` — перевіряє наявність заголовка `Authorization` для маршрутів статей.
- `sessionMiddleware` — налаштовує управління сесіями за допомогою пакета `express-session`.
- `errorHandler` — централізовано обробляє помилки, передані механізму Express, і повертає статус `500` із текстовим повідомленням `Something went wrong`.

Для читання JSON-даних із тіла запиту використовується `express.json()`.

## Управління сесіями

Для управління сесіями використовується пакет `express-session`.

Сесія дозволяє серверу зберігати дані між HTTP-запитами одного клієнта. Для зв'язку запитів із певною сесією використовується cookie з ідентифікатором сесії.

Налаштування сесій винесені в окремий файл `middlewares/sessionMiddleware.js` і підключаються в `server.js` за допомогою `app.use(sessionMiddleware)`.

Основні параметри:

- `secret` — секретний ключ, який використовується для підпису ідентифікатора сесії.
- `resave: false` — не зберігати сесію повторно, якщо вона не змінювалася.
- `saveUninitialized: false` — не зберігати нові сесії, які ще не були ініціалізовані.

Роботу сесій було перевірено за допомогою тимчасового тестового маршруту, який підраховував кількість відвідувань. Після перевірки тестовий маршрут було видалено.

**Примітка:** сесії налаштовані на рівні сервера, але наразі не використовуються для автентифікації користувачів або контролю доступу до маршрутів. У проєкті використовується стандартне сховище `MemoryStore`, яке призначене для розробки та тестування, а не для production-середовища.

## Структура проєкту

```text
home-work-61-express-server-middleware/
├── controllers/
│   ├── rootController.js
│   ├── usersController.js
│   └── articlesController.js
├── routes/
│   ├── usersRoutes.js
│   └── articlesRoutes.js
├── middlewares/
│   ├── logRequests.js
│   ├── basicAuth.js
│   ├── usersMiddleware.js
│   ├── checkArticleAccess.js
│   ├── sessionMiddleware.js
│   └── errorHandler.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Примітка

Проєкт призначений для навчання. Дані користувачів і статей не зберігаються в базі даних. Маршрути повертають текстові відповіді для перевірки роботи сервера та мідлвар.

Реалізована перевірка авторизації є базовою демонстрацією роботи мідлвар і не призначена для використання в реальному захищеному застосунку.

Для використання в production-середовищі необхідно налаштувати надійне сховище сесій, зберігати секретний ключ у змінних середовища та реалізувати повноцінну автентифікацію й авторизацію.