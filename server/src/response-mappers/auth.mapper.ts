import jwt from 'jsonwebtoken';
import { AppConfig } from "../configs";
import { TokenPayload } from "../models";

export class AuthMapper {
    getToken(payload: TokenPayload, configs: AppConfig) {
        const token = jwt.sign(payload, configs.getSecret())
        return token;
    }
}