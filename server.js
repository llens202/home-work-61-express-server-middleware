import express from "express";
import { getRoot } from './controllers/rootController.js';  
import usersRoutes from './routes/usersRoutes.js';
import articlesRoutes from './routes/articlesRoutes.js';
import { logRequests } from './middlewares/logRequests.js';

const app = express();

app.use(express.json());

app.use(logRequests);

 app.get("/", getRoot);
 
 app.use("/articles", articlesRoutes);

 app.use("/users", usersRoutes);
 

 app.listen(3000, () => {
    console.log('Server is running on port 3000');
 });

 