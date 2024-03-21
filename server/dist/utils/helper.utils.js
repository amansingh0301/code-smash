"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionToIdxMap = exports.generateUniquePositiveNumbers = void 0;
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
exports.optionToIdxMap = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3
};
