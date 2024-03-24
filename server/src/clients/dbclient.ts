import { Db, MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import fs from 'fs';
import path from 'path';
import { appConfig } from "../configs";
import { GKQuestions } from "../models";
import { QuestionNotFoundError } from "../errors";

export class DBClient {
    private client: MongoClient;
    private db!: Db;

    constructor(){
        this.client = new MongoClient(appConfig.getMonogdb_uri(), {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
        });

        

        this.connect().catch(err => {console.log('could not connect to mongodb')})
    }

    getClient() {
        return this.client;
    }

    async connect() {
        await this.client.connect();
        this.db = this.client.db(appConfig.getDbName());
        console.log("successfully connected to MongoDB!");
    }

    async close() {
        await this.client.close();
        console.log("successfully closed connection to MongoDB!");
    }

    async insertQuestions() {
        try {
          const collection = this.db.collection("GK");
          const data = JSON.parse(fs.readFileSync(path.join(__dirname,'../utils/output.json'), 'utf-8'));
          data.forEach((question: GKQuestions) => question._id = new ObjectId());
      
          const result = await collection.insertMany(data);
          console.log(`${result.insertedCount} documents inserted successfully!`);
        } catch (err) {
          console.error("Error inserting documents:", err);
        }
      }

    async getTotalDocuments(collectionName: string) {
        const collection = this.db.collection(collectionName);
        return await collection.countDocuments({})
    }

    async getQuestions(questionNumbers: number[], collectionName: string) {
        const collection = this.db.collection(collectionName);

        const cursor = collection.find({ questionNo: { $in: questionNumbers } });
        const filteredDocuments = await cursor.toArray();
        return filteredDocuments.map((document: GKQuestions) => document._id);
    }

    async getQuestion(questionId: string, collectionName: string) {
        const objectId = new ObjectId(questionId);
        const collection = this.db.collection(collectionName);
        const document = await collection.findOne({ _id: objectId });
        if(!document){
            throw new QuestionNotFoundError(`Question with ${questionId} not found`);
        }
        return document;
    }

    async getQuestionsWithId(questionIds: string[], collectionName: string) {
        const ObjectIds = questionIds.map(questionId => new ObjectId(questionId));
        const collection = this.db.collection(collectionName);
        const cursor = await collection.find({ _id: { $in: ObjectIds } });
        const filteredDocuments = await cursor.toArray();
        if(!filteredDocuments){
            throw new QuestionNotFoundError(`Unable to find questions ${questionIds}`);
        }
        return filteredDocuments;
    }
}