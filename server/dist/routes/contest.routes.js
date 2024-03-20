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
exports.ContestRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../middlewares");
const handlers_1 = require("../handlers");
class ContestRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.handleQuestion = this.handleQuestion.bind(this);
    }
    createRoutes() {
        this.router.post('/questions', middlewares_1.tokenValidator, this.handleQuestion);
        return this.router;
    }
    handleQuestion(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const questions = yield handlers_1.contestHandler.handleQuestions(request, response);
            return response.json(questions);
        });
    }
}
exports.ContestRoutes = ContestRoutes;
