import express, { Request, Response, Router } from 'express';
import { IRoute } from "../interfaces";
import { contestQuestionInputInputValidator, fetchQuestionInputs, fetchQuestionsInputs, tokenValidator } from '../middlewares';
import { contestHandler } from '../handlers';

export class ContestRoutes implements IRoute {
    private router: Router;
    constructor() {
        this.router = express.Router();
        this.handleQuestions = this.handleQuestions.bind(this);
    }
    
    createRoutes(): Router {
        this.router.post('/questions',contestQuestionInputInputValidator(fetchQuestionsInputs), tokenValidator,this.handleQuestions);
        this.router.post('/question',contestQuestionInputInputValidator(fetchQuestionInputs), tokenValidator,this.handleQuestion);
        return this.router;
    }

    private async handleQuestions(request: Request, response: Response) {
        const questions = await contestHandler.handleQuestions(request, response);
        return response.json(questions);
    }

    private async handleQuestion(request: Request, response: Response) {
        const questions = await contestHandler.handleQuestion(request, response);
        return response.json(questions);
    }
}