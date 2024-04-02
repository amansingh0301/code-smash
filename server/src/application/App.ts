import express from 'express'
import http from 'http';
import {server as websocket} from 'websocket';

import dotenv from 'dotenv';
import { Routes } from './Routes';
dotenv.config();

export class App {
    private app: express.Application;
    private httpServer: http.Server;

    constructor() {
        this.app = express();
        this.httpServer = http.createServer(this.app);
        const ws = new websocket({httpServer: this.httpServer})
        new Routes(this.app, ws)
    }

    public start(port: string ) {
        return new Promise((resolve, reject)=>{
            this.httpServer.listen(parseInt(port), () => {
                resolve(port);
            })
            .on('error', (err: object) => reject(err));
        })
    }
}