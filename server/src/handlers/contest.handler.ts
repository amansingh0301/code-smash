import { Request, Response } from "express";
import { appConfig } from "../configs";
import { contestMapper } from "../response-mappers";
import { contestServiceInterface } from "../service-interface";
import { ContestQuestionPayload } from "../models";

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
}