import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { InvalidTokenError } from "../../errors";
import { appConfig } from '../../configs';

export class TokentValidator {
    validateToken(request: Request, response: Response, next: NextFunction) {
        const token = request.cookies['accessToken'];

        if (!token) {
            next(new InvalidTokenError('Unauthorized'));
        }

        try {
            const decoded = jwt.verify(token, appConfig.getSecret());
            next();
        } catch (error) {
            next(new InvalidTokenError('Unauthorized'));
        }
    };
}