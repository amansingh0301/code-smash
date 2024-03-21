import { Document, ObjectId, WithId } from "mongodb";
import { CheckAnswerPayload } from "../models";
import { optionToIdxMap } from "../utils";
import { AnswerNotFoundError } from "../errors";

export class ContestMapper {
    mapQuestions(svcResponse: (ObjectId | undefined)[]) {
        return svcResponse;
    }

    mapQuestion(svcResponse: WithId<Document>) {
        return {
            question: svcResponse.question,
            options: svcResponse.options
        };
    }

    mapCheckAnswer(svcResponse: WithId<Document>, answerPayload: CheckAnswerPayload) {
        try{
            const correctAnswerIdx = optionToIdxMap[(svcResponse.answer as string).toLowerCase() as keyof optionToIdxMap]
            return {
                correct: svcResponse.options[correctAnswerIdx] === answerPayload.selectedOption,
                answer: svcResponse.options[correctAnswerIdx],
                explanation: svcResponse.explanation,
            }
        }catch(err) {
            throw new AnswerNotFoundError(`Could find the correct answer for questionId: ${answerPayload.questionId}`)
        }
    }
}