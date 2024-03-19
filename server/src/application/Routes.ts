import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
const path = require('path');
import { authRoutes } from '../routes';
import { errorMiddleware } from '../middlewares';

export class Routes {

    constructor(server: express.Express) {

        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }))
        server.use('/',express.static(path.join(__dirname,'../../build')));

        //All features routes
        server.use('/auth', authRoutes);

        //custom routes for healthcheck and metrics
        server.get('/health', (req: Request, res: Response) => {
            res.send('OK');
        })

        server.use(errorMiddleware);
    }
}