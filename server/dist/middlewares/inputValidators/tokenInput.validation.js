"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenInputValidator = void 0;
const express_validator_1 = require("express-validator");
const errors_1 = require("../../errors");
class TokenInputValidator {
    validateInput(validations) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            for (let validation of validations) {
                yield validation.run(req);
            }
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return next(new errors_1.InvalidInputError('Input field error', errors.array()));
            }
            return next();
        });
    }
    ;
}
exports.TokenInputValidator = TokenInputValidator;
