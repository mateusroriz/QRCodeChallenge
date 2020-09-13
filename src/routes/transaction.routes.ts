import { Router } from 'express';
import bcrypt from 'bcryptjs';

const transactionRouter = Router();

transactionRouter.post('/', async (request, response) => {
  try {
    const {body} = request;
    const qrCodeString = bcrypt.hashSync(JSON.stringify(body), 10);
    response.json({ qrCodeString });
  } 
  catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
