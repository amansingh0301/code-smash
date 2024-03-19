import dotenv from 'dotenv';
import { ConfigAbsentError } from '../errors';
import { CONSTANTS } from '../utils';
dotenv.config();

export class AppConfig {
    private port: string | undefined;
    private jsonurl: string | undefined;

    constructor() {
        this.port = process.env.PORT;
        this.jsonurl = process.env.jsonurl;
    }

    getPort() {
        return this.port ? this.port : '8080';
    }

    getJsonurl() {
        if(this.jsonurl)   
            return this.jsonurl;
        
        throw new ConfigAbsentError(CONSTANTS.JSON_URL_ABSENT_MESSAGE);
    }
}