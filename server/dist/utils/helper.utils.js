"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionToIdxMap = exports.generateUserId = exports.generateRoomCode = exports.generateUniquePositiveNumbers = void 0;
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
const generateRoomCode = () => {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
};
exports.generateRoomCode = generateRoomCode;
const generateUserId = () => {
    // Ensure the number starts with a non-zero digit to avoid leading zeros
    while (true) {
        const uniqueNumber = Math.floor(Math.random() * (9000000 - 100000) + 1000000);
        if (uniqueNumber.toString().length === 7) {
            return uniqueNumber.toString();
        }
    }
};
exports.generateUserId = generateUserId;
exports.optionToIdxMap = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3
};
