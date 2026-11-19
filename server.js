import express from "express";
import { sessionMiddleware } from './middlewares/sessionMiddleware.js';
import { getRoot } from './controllers/rootController.js';  
import usersRoutes from './routes/usersRoutes.js';
import articlesRoutes from './routes/articlesRoutes.js';
import { logRequests } from './middlewares/logRequests.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());

app.use(sessionMiddleware);

app.use(logRequests);

 app.get("/", getRoot);
 
 app.use("/articles", articlesRoutes);

 app.use("/users", usersRoutes);

 app.use(errorHandler);

 app.listen(3000, () => {
    console.log('Server is running on port 3000');
 });

 