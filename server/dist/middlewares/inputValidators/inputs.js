"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenInputs = void 0;
const express_validator_1 = require("express-validator");
exports.tokenInputs = [
    (0, express_validator_1.body)('name').exists().withMessage('Name is Required'),
    (0, express_validator_1.body)('lastName').exists().withMessage('LastName is Required'),
    (0, express_validator_1.body)('address.line1').exists().withMessage('line1 is Rquired').isNumeric().withMessage('Should be house number'),
    (0, express_validator_1.body)('address.line2').exists().withMessage('line2 is Required').isEmail().withMessage('Should be an email')
];
