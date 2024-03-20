import { AppConfig } from "../configs";

export class DBClient {
    async getQuestions(numberOfQuestions: number, config: AppConfig) {
        const questionsList = [];
        while(numberOfQuestions--){
            questionsList.push(Math.random());
        }

        return questionsList;
    }
}