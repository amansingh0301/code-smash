import express, { Request, Response, Router } from 'express';
import { IRoute } from "../interfaces";
import { tokenValidator } from '../middlewares';
import { contestHandler } from '../handlers';

export class ContestRoutes implements IRoute {
    private router: Router;
    constructor() {
        this.router = express.Router();
        this.handleQuestion = this.handleQuestion.bind(this);
    }
    
    createRoutes(): Router {
        this.router.post('/questions',tokenValidator,this.handleQuestion);
        return this.router;
    }

    private async handleQuestion(request: Request, response: Response) {
        const questions = await contestHandler.handleQuestions(request, response);
        return response.json(questions);
    }
}