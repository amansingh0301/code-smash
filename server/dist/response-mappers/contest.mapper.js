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
    mapSubmitContest(svcResponse, submitPayload) {
        try {
            const responses = submitPayload.questionResponseMap;
            svcResponse.forEach(question => {
                const correctAnswerIdx = utils_1.optionToIdxMap[question.answer.toLowerCase()];
                const id = question._id.toString();
                question.marked = responses[id];
                question.answer = question.options[correctAnswerIdx];
            });
            const result = this.getResult(svcResponse);
            return {
                result,
                questions: svcResponse
            };
        }
        catch (err) {
            throw new errors_1.SubmitError('Error while getting result!');
        }
    }
    getResult(svcResponse) {
        const correct = svcResponse.filter(question => question.marked === question.answer).length;
        const unAttempted = svcResponse.filter(question => question.marked === '').length;
        const inCorrect = svcResponse.filter(question => question.marked !== question.answer && question.marked !== '').length;
        return {
            correct,
            unAttempted,
            inCorrect
        };
    }
}
exports.ContestMapper = ContestMapper;
