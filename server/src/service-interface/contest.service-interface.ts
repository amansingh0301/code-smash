import { dbClient } from "../clients";
import { AppConfig } from "../configs";

export class ContestServiceInterface {
    async getQuestions(numberOfQuestions: number, config: AppConfig){
        return await dbClient.getQuestions(numberOfQuestions, config);
    }
}