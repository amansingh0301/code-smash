import { body } from "express-validator";

export const tokenInputs = [
    body('name').exists().withMessage('Name is Required'),
    body('time').exists().withMessage('Time is Required').isNumeric().withMessage('Should be Numeric'),
    body('questions').exists().withMessage('No of questions is Required').isNumeric().withMessage('Should be Numeric'),
];

export const fetchQuestionsInputs = [
    body('type').exists().withMessage('type is Required'),
    body('questions').exists().withMessage('No of questions is Required').isNumeric().withMessage('Should be Numeric')
];

export const fetchQuestionInputs = [
    body('type').exists().withMessage('type is Required'),
    body('questionId').exists().withMessage('questionId is Required')
];