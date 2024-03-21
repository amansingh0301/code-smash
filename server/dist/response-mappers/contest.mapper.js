"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestMapper = void 0;
const utils_1 = require("../utils");
const errors_1 = require("../errors");
class ContestMapper {
    mapQuestions(svcResponse) {
        return svcResponse;
    }
    mapQuestion(svcResponse) {
        return {
            question: svcResponse.question,
            options: svcResponse.options
        };
    }
    mapCheckAnswer(svcResponse, answerPayload) {
        try {
            const correctAnswerIdx = utils_1.optionToIdxMap[svcResponse.answer.toLowerCase()];
            return {
                correct: svcResponse.options[correctAnswerIdx] === answerPayload.selectedOption,
                answer: svcResponse.options[correctAnswerIdx],
                explanation: svcResponse.explanation,
            };
        }
        catch (err) {
            throw new errors_1.AnswerNotFoundError(`Could find the correct answer for questionId: ${answerPayload.questionId}`);
        }
    }
}
exports.ContestMapper = ContestMapper;
