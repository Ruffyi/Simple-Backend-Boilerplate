import express, { Application, Request, Response } from 'express';

import userRouter from './routes/userRouter';

import { allowCors, handler } from './utils/cors';

import cors from 'cors';

import dotenv from 'dotenv';

import connectToMongoDB from './db/connectDB';

dotenv.config();

connectToMongoDB();

const app: Application = express();

app.use(cors());

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.get('/', userRouter);

// app.use(allowCors(handler));

app.listen(SERVER_PORT, () => {
	console.log(`Server is listening at port : ${SERVER_PORT}`);
});
