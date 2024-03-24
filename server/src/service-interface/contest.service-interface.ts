import { dbClient } from "../clients";
import { AppConfig } from "../configs";
import { ContestQuestionPayload, QuestionPayload, SubmitPayload } from "../models";
import { generateUniquePositiveNumbers } from "../utils";

export class ContestServiceInterface {
    async getQuestions(contestQuestion: ContestQuestionPayload, config: AppConfig){
        const numberOfQuestions = contestQuestion.questions as number;
        const collectionName = contestQuestion.type as string;
        const totalDocuments = await dbClient.getTotalDocuments(collectionName);
        const generatedQuestionNumbers = generateUniquePositiveNumbers(numberOfQuestions, totalDocuments)
        return await dbClient.getQuestions(generatedQuestionNumbers, collectionName);
    }

    async getQuestion(question: QuestionPayload, config: AppConfig){
        const questionId = question.questionId;
        const collectionName = question.type as string;
        return await dbClient.getQuestion(questionId, collectionName);
    }

    async getQuestionList(submitPyaload: SubmitPayload, config: AppConfig){
        const collectionName = submitPyaload.type as string;
        const questionResponseMap = submitPyaload.questionResponseMap as Map<string,string>;
        const questionIds = Object.keys(questionResponseMap);
        return await dbClient.getQuestionsWithId(questionIds, collectionName);
    }


}