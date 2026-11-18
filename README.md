# Express Server — Middleware

## Опис проєкту

Навчальний сервер, створений за допомогою Node.js та Express.js. Сервер обробляє HTTP-запити для головного маршруту, користувачів і статей.

У проєкті реалізовано мідлвари для логування запитів, базової перевірки авторизації, валідації даних користувача та контролю доступу до маршрутів статей.

Проєкт має модульну структуру: маршрути, контролери та мідлвари зберігаються в окремих файлах.

## Технології

- Node.js
- Express.js
- npm
- JavaScript (ES Modules)

## Встановлення

1. Клонуйте репозиторій:

   ```bash
   git clone <посилання-на-репозиторій>
   ```

2. Перейдіть до папки проєкту:

   ```bash
   cd home-work-61-express-middleware
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

Базова адреса: `http://localhost:3000`

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

Якщо одне з обов'язкових полів відсутнє, сервер повертає статус `400` і повідомлення:

`Missing required fields: username and password`

Якщо заголовок `Authorization` відсутній, сервер повертає статус `401` і повідомлення:

`Access denied. No credentials sent.`

### Статті

Для доступу до маршрутів статей потрібно передати заголовок `Authorization`.

| Метод | Шлях | Відповідь |
|---|---|---|
| GET | `/articles` | `Get articles route` |
| POST | `/articles` | `Post articles route` |
| GET | `/articles/:articleId` | `Get article by ID route: {articleId}` |
| PUT | `/articles/:articleId` | `Put article by ID route: {articleId}` |
| DELETE | `/articles/:articleId` | `Delete article by ID route: {articleId}` |

Якщо заголовок `Authorization` відсутній, сервер повертає статус `403` і повідомлення:

`Access forbidden. No permission to access articles.`

### Приклад заголовка авторизації

У Postman на вкладці **Headers** додайте:

| Key | Value |
|---|---|
| `Authorization` | `test123` |

У поточній навчальній реалізації перевіряється лише наявність заголовка, а не справжність облікових даних чи права користувача.

## Мідлвари

- `logRequests` — записує HTTP-метод і URL запиту в термінал.
- `basicAuth` — перевіряє наявність заголовка `Authorization` для маршрутів користувачів.
- `validateUserInput` — перевіряє наявність полів `username` і `password`.
- `checkArticleAccess` — перевіряє наявність заголовка `Authorization` для маршрутів статей.

Для читання JSON-даних із тіла запиту використовується `express.json()`.

## Структура проєкту

- `server.js` — створення та запуск сервера, підключення мідлвар і маршрутів.
- `routes/` — визначення маршрутів та прив'язка їх до контролерів і мідлвар.
- `controllers/` — обробка запитів і формування відповідей.
- `middlewares/` — логування, перевірка авторизації, валідація та контроль доступу.

## Примітка

Проєкт призначений для навчання. Дані користувачів і статей не зберігаються в базі даних. Маршрути повертають текстові відповіді для перевірки роботи сервера та мідлвар.
