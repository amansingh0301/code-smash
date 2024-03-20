import dotenv from 'dotenv';
import { ConfigAbsentError } from '../errors';
import { CONSTANTS } from '../utils';
dotenv.config();

export class AppConfig {
    private port: string | undefined;
    private jsonurl: string | undefined;
    private secret: string | undefined;

    constructor() {
        this.port = process.env.PORT;
        this.jsonurl = process.env.jsonurl;
        this.secret = process.env.secret
    }

    getPort() {
        return this.port ? this.port : '8080';
    }

    getSecret() {
        if(this.secret)   
            return this.secret;
        
        throw new ConfigAbsentError(CONSTANTS.SECRET_ABSENT);
    }

    getJsonurl() {
        if(this.jsonurl)   
            return this.jsonurl;
        
        throw new ConfigAbsentError(CONSTANTS.JSON_URL_ABSENT_MESSAGE);
    }
}