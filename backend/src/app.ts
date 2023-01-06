const cors = require('cors');
import express from 'express';
import 'express-async-errors';
import LoginRouter from './routes/login.routes';
import DishesRouter from './routes/dishes.routes';
import OrderRouter from './routes/order.routes';
import errorMiddleware from './controllers/middlewares/errorMiddleware';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/customer', LoginRouter);
app.use('/dishes', DishesRouter);
app.use('/order', OrderRouter);

app.use(errorMiddleware);

export default app;