import { Request, Response } from "express";
import { appConfig } from "../configs";
import { contestMapper } from "../response-mappers";
import { contestServiceInterface } from "../service-interface";
import { CheckAnswerPayload, ContestQuestionPayload, QuestionPayload, SubmitPayload } from "../models";
import { logger } from "../utils";

export class ContestHandler {
    async handleQuestions(request: Request, response: Response) {
        logger.info({bod: request.body, method: 'ContestHandler-handleQuestions'});
        //getConfig
        const config = appConfig;
        
        //getServiceInterface and mappers
        //call service Interface
        const svcResponse = await contestServiceInterface.getQuestions(request.body as ContestQuestionPayload, config);

        logger.info({bod: request.body, method: 'ContestHandler-handleQuestions', config: config, svcResponse: svcResponse});
        
        //call mapper with response from service Interface
        const res = contestMapper.mapQuestions(svcResponse);
        logger.info({bod: request.body, method: 'ContestHandler-handleSubmitContest', config: config , res: res});
        return res;
    }

    async handleQuestion(request: Request, response: Response) {
        logger.info({bod: request.body, method: 'ContestHandler-handleQuestion'});
        //getConfig
        const config = appConfig;
        
        //getServiceInterface and mappers
        //call service Interface
        const svcResponse = await contestServiceInterface.getQuestion(request.body as QuestionPayload, config);
        logger.info({bod: request.body, method: 'ContestHandler-handleQuestion', config: config, svcResponse: svcResponse});
        
        //call mapper with response from service Interface
        const res = contestMapper.mapQuestion(svcResponse);
        logger.info({bod: request.body, method: 'ContestHandler-handleQuestion', config: config , res: res});
        return res;
    }

    async handleCheckAnswer(request: Request, response: Response) {
        logger.info({bod: request.body, method: 'ContestHandler-handleCheckAnswer'});
        //getConfig
        const config = appConfig;
        
        //getServiceInterface and mappers
        //call service Interface
        const svcResponse = await contestServiceInterface.getQuestion(request.body as QuestionPayload, config);
        logger.info({bod: request.body, method: 'ContestHandler-handleCheckAnswer', config: config, svcResponse: svcResponse});
        
        //call mapper with response from service Interface
        const res = contestMapper.mapCheckAnswer(svcResponse, request.body as CheckAnswerPayload);
        logger.info({bod: request.body, method: 'ContestHandler-handleCheckAnswer', config: config , res: res});
        return res;
    }

    async handleSubmitContest(request: Request, response: Response) {
        logger.info({bod: request.body, method: 'ContestHandler-handleSubmitContest'});
        //getConfig
        const config = appConfig;
        
        //getServiceInterface and mappers
        //call service Interface
        const svcResponse = await contestServiceInterface.getQuestionList(request.body as SubmitPayload, config);
        logger.info({bod: request.body, method: 'ContestHandler-handleSubmitContest', config: config, svcResponse: svcResponse});
        
        //call mapper with response from service Interface
        const res = contestMapper.mapSubmitContest(svcResponse, request.body as SubmitPayload);
        logger.info({bod: request.body, method: 'ContestHandler-handleSubmitContest', config: config , res: res});
        return res;
    }
}