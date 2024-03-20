export class ContestMapper {
    mapQuestions(svcResponse: number[]) {
        return svcResponse.map(idx => idx+2);
    }
}