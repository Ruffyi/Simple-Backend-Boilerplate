import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

const app: Application = express();
const allowCors = (fn: any) => async (req: Request, res: any) => {
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Allow-Origin', '*');
	// another common pattern
	// res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET,OPTIONS,PATCH,DELETE,POST,PUT'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
	);
	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}
	return await fn(req, res);
};

const handler = (req: Request, res: Response) => {
	const d = new Date();
	res.end(d.toString());
};

app.use(allowCors(handler));

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
