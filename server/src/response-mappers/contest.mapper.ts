import { Document, ObjectId, WithId } from "mongodb";
import { CheckAnswerPayload, SubmitPayload } from "../models";
import { optionToIdxMap } from "../utils";
import { AnswerNotFoundError, SubmitError } from "../errors";

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

    mapSubmitContest(svcResponse: WithId<Document>[], submitPayload: SubmitPayload) {
        try{
            const responses = submitPayload.questionResponseMap as Map<string,string>;
            svcResponse.forEach( question => {
                const correctAnswerIdx = optionToIdxMap[(question.answer as string).toLowerCase() as keyof optionToIdxMap]
                const id = question._id.toString();
                question.marked = responses[id as keyof Map<string,string>];
                question.answer = question.options[correctAnswerIdx]
            })

            const result = this.getResult(svcResponse);

            return {
                result,
                questions: svcResponse
            }
        } catch(err) {
            throw new SubmitError('Error while getting result!');
        }
    }

    getResult(svcResponse: WithId<Document>[]){
        const correct = svcResponse.filter(question => question.marked === question.answer).length;
        const unAttempted = svcResponse.filter(question => question.marked === '').length;
        const inCorrect = svcResponse.filter(question => question.marked !== question.answer && question.marked !== '').length;

        return {
            correct,
            unAttempted,
            inCorrect
        }
    }
}