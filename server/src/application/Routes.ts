import express, { Request, Response } from 'express';
import {server as websocket} from 'websocket';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import path from 'path';
import { authRoutes, contestRoutes } from '../routes';
import { errorMiddleware } from '../middlewares';
import { dbClient } from '../clients';
import { logger } from '../utils';
import { connectionHandler } from '../handlers';

export class Routes {

    constructor(server: express.Application, ws: websocket) {

        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }))
        server.use(cookieParser());
        server.use('/',express.static(path.join(__dirname,'../../build')));

        //All features routes
        server.use('/auth', authRoutes);
        server.use('/contest', contestRoutes);

        

        ws.on('request', (req) => {
            const connection = req.accept();
            console.log('request accepted');

            connection.on('message', (message) => connectionHandler.handleMessage(connection, message));

            connection.on('error', (error) => connectionHandler.handleError(connection, error));
        })

        server.get('/insert',async (req: Request, res: Response) => {
            // await dbClient.connect();
            // await dbClient.insertQuestions();
            // await dbClient.close();
            res.send('not inserted successfully');
        })

        //custom routes for healthcheck and metrics
        server.get('/health', (req: Request, res: Response) => {
            console.log('request received')
            res.json('health ok');
        })

        server.get('/*',(req, res) => {
            res.redirect('/');
        })

        server.use(errorMiddleware);
    }
}