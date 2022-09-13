import express from 'express';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

app.use(productsRoutes);
app.use(usersRoutes);

export default app;
