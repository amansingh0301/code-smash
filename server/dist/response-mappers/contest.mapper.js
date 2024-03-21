"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestMapper = void 0;
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
}
exports.ContestMapper = ContestMapper;
