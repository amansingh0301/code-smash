import dotenv from 'dotenv';
import { ConfigAbsentError } from '../errors';
import { CONSTANTS } from '../utils';
dotenv.config();

export class AppConfig {
    private port: string | undefined;
    private secret: string | undefined;
    private mongodb_uri: string | undefined;
    private db: string | undefined;

    constructor() {
        this.port = process.env.PORT;
        this.secret = process.env.secret
        this.mongodb_uri = process.env.mongodb_uri
        this.db = process.env.db
    }

    getPort() {
        return this.port ? this.port : '8080';
    }

    getSecret() {
        if(this.secret)   
            return this.secret;
        
        throw new ConfigAbsentError(CONSTANTS.SECRET_ABSENT);
    }

    getMonogdb_uri() {
        if(this.mongodb_uri)   
            return this.mongodb_uri;
        
        throw new ConfigAbsentError(CONSTANTS.MONGODB_URI_ABSENT);
    }

    getDbName() {
        if(this.db)   
            return this.db;
        
        throw new ConfigAbsentError(CONSTANTS.DB_NAME_ABSENT);
    }
}