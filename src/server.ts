import express from 'express';
import { json, urlencoded } from 'express';
import cors from 'cors';
import 'reflect-metadata';

import './database/connection';
import router from './routes';

export const app = express();

app.disable('x-powered-by');

app.use(express.static(__dirname));

const corsOptions: cors.CorsOptions = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', router);

export const start = (): void => {
    const port = process.env.PORT;

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};
