import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

const app: Application = express();

app.use(cors());

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.get('/', (req: Request, res: Response) => {
	res.send({
		message: 'Hello!',
	});
});

app.get('/product', (req: Request, res: Response) => {
	res.send({
		message: 'PRoduct!!',
	});
});

app.listen(SERVER_PORT, () => {
	console.log(`Server is listening at port : ${SERVER_PORT}`);
});
