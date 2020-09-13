import { Router } from 'express';
import app from '../app';
import transactionRouter from './transaction.routes';

const routes = Router();
routes.use('/transactions', transactionRouter);
routes.get('/transactions', (req, resp)=> resp.send(transactionRouter))
export default routes;
