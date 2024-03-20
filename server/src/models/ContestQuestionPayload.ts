export class ContestQuestionPayload {
    questions?: number;
    type?: string;

    getQuestions(){
        return this.questions;
    }

    getType(){
        return this.type;
    }
}