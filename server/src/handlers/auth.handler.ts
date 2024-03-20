import { Request, Response } from "express";
import { TokenPayload } from "../models";
import { authMapper } from "../response-mappers";
import { appConfig } from "../configs";

export class AuthHandler {
    handleToken(request: Request, response: Response) {
        //getConfig
        const config = appConfig;
        
        //getServiceInterface and mappers
        //call service Interface
        //call mapper with response from service Interface
        return authMapper.getToken(request.body as TokenPayload, config);
    }
}