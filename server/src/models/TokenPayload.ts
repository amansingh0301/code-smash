export class TokenPayload {
    name?: string;
    time?: number;
    questions?: number;


    getName() {
        return this.name;
    }

    getTime(){
        return this.time ? this.time : 1;
    }

    getQuestions(){
        return this.questions;
    }
}