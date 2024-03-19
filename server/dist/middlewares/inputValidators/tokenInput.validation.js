"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenInputValidator = void 0;
const errors_1 = require("../../errors");
class TokenInputValidator {
    validateInput(req, res, next) {
        if (!req.body.name) {
            throw new errors_1.InvalidInputError('Name field should be present');
        }
        next();
    }
}
exports.TokenInputValidator = TokenInputValidator;
