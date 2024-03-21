import { Document, ObjectId, WithId } from "mongodb";

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
}