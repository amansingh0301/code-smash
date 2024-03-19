import express from 'express'
import dotenv from 'dotenv';
import { Routes } from './Routes';
dotenv.config();

export class App {
    private httpsServer: any;

    constructor() {
        this.httpsServer = express();
        new Routes(this.httpsServer)
    }

    public start(port: string ) {
        return new Promise((resolve, reject)=>{
            this.httpsServer.listen(parseInt(port), () => {
                resolve(port);
            })
            .on('error', (err: object) => reject(err));
        })
    }
}