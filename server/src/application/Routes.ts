import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
const path = require('path');
import { authRoutes, contestRoutes } from '../routes';
import { errorMiddleware } from '../middlewares';

export class Routes {

    constructor(server: express.Express) {

        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }))
        server.use(cookieParser());
        server.use('/',express.static(path.join(__dirname,'../../build')));

        //All features routes
        server.use('/auth', authRoutes);
        server.use('/contest', contestRoutes);

        //custom routes for healthcheck and metrics
        server.get('/health', (req: Request, res: Response) => {
            console.log('request received')
            res.json('health ok');
        })

        server.use(errorMiddleware);
    }
}