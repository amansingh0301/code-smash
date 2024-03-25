import { Request, Response } from "express";
import { TokenPayload } from "../models";
import { authMapper } from "../response-mappers";
import { appConfig } from "../configs";
import { logger } from "../utils";

export class AuthHandler {
    handleToken(request: Request, response: Response) {

        logger.info({bod: request.body, method: 'AuthHandler-handleToken'});
        //getConfig
        const config = appConfig;

        logger.info({bod: request.body, method: 'AuthHandler-handleToken', config: config});
        
        //getServiceInterface and mappers
        //call service Interface
        //call mapper with response from service Interface
        const res = authMapper.getToken(request.body as TokenPayload, config);

        logger.info({bod: request.body, method: 'AuthHandler-handleToken', config: config , res: res});
        return res;
    }
}