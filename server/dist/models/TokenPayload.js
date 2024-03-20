"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenPayload = void 0;
class TokenPayload {
    getName() {
        return this.name;
    }
    getTime() {
        return this.time ? this.time : 1;
    }
    getQuestions() {
        return this.questions;
    }
}
exports.TokenPayload = TokenPayload;
