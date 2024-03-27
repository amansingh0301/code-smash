import express, { Request, Response, Router } from 'express';
import { IRoute } from "../interfaces";
import { tokenInputValidator, tokenInputs, tokenValidator } from '../middlewares';
import { authHandler } from '../handlers';

export class AuthenticationRoutes implements IRoute {
    private router: Router;
    constructor() {
        this.router = express.Router();
        this.handleToken = this.handleToken.bind(this);
        this.invalidateToken = this.invalidateToken.bind(this);
        this.validateToken = this.validateToken.bind(this);
    }
    
    createRoutes(): Router {
        this.router.post('/token',tokenInputValidator(tokenInputs),this.handleToken);
        this.router.get('/invalidate', tokenValidator, this.invalidateToken);
        this.router.get('/validate',tokenValidator,this.validateToken);
        return this.router;
    }

    private handleToken(request: Request, response: Response) {
        try{
            const token = authHandler.handleToken(request, response);
            response.cookie('accessToken', token, { httpOnly: true, secure: true })
            response.json('Token Acquired');
        } catch(err) {
            response.sendStatus(500).json('Internal Server Error')
        }
    }

    private invalidateToken(request: Request, response: Response) {
        try{
            const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
            const yesterday = new Date(Date.now() - oneDayInMilliseconds);

            response.cookie('accessToken','', {httpOnly: true, secure: true, expires: yesterday});
            response.json('Invalidated');
        } catch(err) {
            response.sendStatus(500).json('Internal Server Error')
        }
    }

    private validateToken(request: Request, response: Response) {
        try{
            response.json('verified');
        } catch(err) {
            response.sendStatus(500).json('Internal Server Error')
        }
    }
}