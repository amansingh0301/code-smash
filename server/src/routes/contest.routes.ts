import express, { Request, Response, Router } from 'express';
import { IRoute } from "../interfaces";
import { checkAnswerInput, contestQuestionInputInputValidator, fetchQuestionInputs, fetchQuestionsInputs, submitContestInput, tokenValidator } from '../middlewares';
import { contestHandler } from '../handlers';

export class ContestRoutes implements IRoute {
    private router: Router;
    constructor() {
        this.router = express.Router();
        this.handleQuestions = this.handleQuestions.bind(this);
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleCheckAnswer = this.handleCheckAnswer.bind(this);
        this.handleSubmitContest = this.handleSubmitContest.bind(this);
    }
    
    createRoutes(): Router {
        this.router.post('/questions',contestQuestionInputInputValidator(fetchQuestionsInputs), tokenValidator,this.handleQuestions);
        this.router.post('/question',contestQuestionInputInputValidator(fetchQuestionInputs), tokenValidator,this.handleQuestion);
        this.router.post('/check',contestQuestionInputInputValidator(checkAnswerInput), tokenValidator,this.handleCheckAnswer);
        this.router.post('/submit',contestQuestionInputInputValidator(submitContestInput), tokenValidator,this.handleSubmitContest);
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

    private async handleCheckAnswer(request: Request, response: Response) {
        const questions = await contestHandler.handleCheckAnswer(request, response);
        return response.json(questions);
    }

    private async handleSubmitContest(request: Request, response: Response) {
        const questions = await contestHandler.handleSubmitContest(request, response);
        return response.json(questions);
    }
}