"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAnswerInput = exports.fetchQuestionInputs = exports.fetchQuestionsInputs = exports.tokenInputs = void 0;
const express_validator_1 = require("express-validator");
exports.tokenInputs = [
    (0, express_validator_1.body)('name').exists().withMessage('Name is Required'),
    (0, express_validator_1.body)('time').exists().withMessage('Time is Required').isNumeric().withMessage('Should be Numeric'),
    (0, express_validator_1.body)('questions').exists().withMessage('No of questions is Required').isNumeric().withMessage('Should be Numeric'),
];
exports.fetchQuestionsInputs = [
    (0, express_validator_1.body)('type').exists().withMessage('type is Required'),
    (0, express_validator_1.body)('questions').exists().withMessage('No of questions is Required').isNumeric().withMessage('Should be Numeric')
];
exports.fetchQuestionInputs = [
    (0, express_validator_1.body)('type').exists().withMessage('type is Required'),
    (0, express_validator_1.body)('questionId').exists().withMessage('questionId is Required')
];
exports.checkAnswerInput = [
    (0, express_validator_1.body)('questionId').exists().withMessage('questionId is Required'),
    (0, express_validator_1.body)('selectedOption').exists().withMessage('selectedOption is Required'),
    (0, express_validator_1.body)('type').exists().withMessage('type is Required')
];
