"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniquePositiveNumbers = void 0;
const generateUniquePositiveNumbers = (numberOfQuestions, totalNumberOfQuestions) => {
    const generatedNumbers = new Set();
    while (generatedNumbers.size < numberOfQuestions) {
        const randomNumber = Math.floor(Math.random() * totalNumberOfQuestions);
        if (!generatedNumbers.has(randomNumber)) {
            generatedNumbers.add(randomNumber);
        }
    }
    return Array.from(generatedNumbers);
};
exports.generateUniquePositiveNumbers = generateUniquePositiveNumbers;
