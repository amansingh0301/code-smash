import { ObjectId } from "mongodb";

export class GKQuestions {
    _id?: ObjectId;
    questionNo?: number;
    question?: string;
    options?: string[];
    answer?: string;
    explanation?: string;
}