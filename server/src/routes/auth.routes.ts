import express, { Request, Response, Router } from 'express';
import { IRoute } from "../interfaces";
import { tokenInputValidator, tokenInputs, tokenValidator } from '../middlewares';
import { authHandler } from '../handlers';

export class AuthenticationRoutes implements IRoute {
    private router: Router;
    constructor() {
        this.router = express.Router();
        this.handleToken = this.handleToken.bind(this);
        this.verifyToken = this.verifyToken.bind(this);
    }
    
    createRoutes(): Router {
        this.router.post('/token',tokenInputValidator(tokenInputs),this.handleToken);
        this.router.post('/verify', tokenValidator, this.verifyToken)
        return this.router;
    }

    private handleToken(request: Request, response: Response) {
        const token = authHandler.handleToken(request, response);
        response.cookie('accessToken', token, { httpOnly: true, secure: true })
        return response.json('Token Acquired');
    }

    private verifyToken(request: Request, response: Response) {
        response.json('verified');
    }
}