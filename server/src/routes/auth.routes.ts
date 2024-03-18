import express, { Request, Response, Router } from 'express';
import { IRoute } from "../interfaces";

export class AuthenticationRoutes implements IRoute {
    private router: Router;
    constructor() {
        this.router = express.Router();
        this.handleToken = this.handleToken.bind(this);
    }
    
    createRoutes(): Router {
        this.router.get('/token',this.handleToken);
        return this.router;
    }

    private handleToken(request: Request, response: Response) {
        console.log('request received');
        return response.send('Token');
    }
}