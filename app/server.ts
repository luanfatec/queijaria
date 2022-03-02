import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { route } from './src/routes/routes';
import cors from 'cors';

import 'dotenv/config';
import 'reflect-metadata';
import './src/database';
import { MDErrors } from './src/middlewares/MdErrors';

const app = express(); /* Init App Express */
app.use(express.json());
app.use(cors());
app.use(route);

app.use(MDErrors); // Meddeware de errors;

app.listen(8000, function () {
    console.log(`Server listening in ${process.env.APP_PORT}`);
})