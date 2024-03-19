import { body } from "express-validator";

export const tokenInputs = [
    body('name').exists().withMessage('Name is Required'),
    body('lastName').exists().withMessage('LastName is Required'),
    body('address.line1').exists().withMessage('line1 is Rquired').isNumeric().withMessage('Should be house number'),
    body('address.line2').exists().withMessage('line2 is Required').isEmail().withMessage('Should be an email')
];