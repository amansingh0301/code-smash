"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBClient = void 0;
const mongodb_1 = require("mongodb");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const configs_1 = require("../configs");
class DBClient {
    constructor() {
        this.client = new mongodb_1.MongoClient(configs_1.appConfig.getMonogdb_uri(), {
            serverApi: {
                version: mongodb_1.ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        this.connect().catch(err => { console.log('could not connect to mongodb'); });
    }
    getClient() {
        return this.client;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
            this.db = this.client.db(configs_1.appConfig.getDbName());
            console.log("successfully connected to MongoDB!");
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.close();
            console.log("successfully closed connection to MongoDB!");
        });
    }
    insertQuestions() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const collection = this.db.collection("GK");
                const data = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '../utils/output.json'), 'utf-8'));
                data.forEach((question) => question._id = new mongodb_1.ObjectId());
                const result = yield collection.insertMany(data);
                console.log(`${result.insertedCount} documents inserted successfully!`);
            }
            catch (err) {
                console.error("Error inserting documents:", err);
            }
        });
    }
    getTotalDocuments(collectionName) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = this.db.collection(collectionName);
            return yield collection.countDocuments({});
        });
    }
    getQuestions(questionNumbers, collectionName) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = this.db.collection(collectionName);
            const cursor = collection.find({ questionNo: { $in: questionNumbers } }); // Filter by questionNo
            const filteredDocuments = yield cursor.toArray();
            return filteredDocuments.map((document) => document._id);
        });
    }
}
exports.DBClient = DBClient;
