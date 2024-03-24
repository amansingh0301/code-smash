import { Request, Response } from "express";
import { appConfig } from "../configs";
import { contestMapper } from "../response-mappers";
import { contestServiceInterface } from "../service-interface";
import { CheckAnswerPayload, ContestQuestionPayload, QuestionPayload, SubmitPayload } from "../models";

export class ContestHandler {
    async handleQuestions(request: Request, response: Response) {
        //getConfig
        const config = appConfig;
        
        //getServiceInterface and mappers
        //call service Interface
        const svcResponse = await contestServiceInterface.getQuestions(request.body as ContestQuestionPayload, config);
        
        //call mapper with response from service Interface
        return contestMapper.mapQuestions(svcResponse);
    }

    async handleQuestion(request: Request, response: Response) {
        //getConfig
        const config = appConfig;
        
        //getServiceInterface and mappers
        //call service Interface
        const svcResponse = await contestServiceInterface.getQuestion(request.body as QuestionPayload, config);
        
        //call mapper with response from service Interface
        return contestMapper.mapQuestion(svcResponse);
    }

    async handleCheckAnswer(request: Request, response: Response) {
        //getConfig
        const config = appConfig;
        
        //getServiceInterface and mappers
        //call service Interface
        const svcResponse = await contestServiceInterface.getQuestion(request.body as QuestionPayload, config);
        
        //call mapper with response from service Interface
        return contestMapper.mapCheckAnswer(svcResponse, request.body as CheckAnswerPayload);
    }

    async handleSubmitContest(request: Request, response: Response) {
        //getConfig
        const config = appConfig;
        
        //getServiceInterface and mappers
        //call service Interface
        const svcResponse = await contestServiceInterface.getQuestionList(request.body as SubmitPayload, config);
        
        //call mapper with response from service Interface
        return contestMapper.mapSubmitContest(svcResponse, request.body as SubmitPayload);
    }
}