export const generateUniquePositiveNumbers = (numberOfQuestions: number, totalNumberOfQuestions: number) => {
    const generatedNumbers: Set<number> = new Set();
  
    while (generatedNumbers.size < numberOfQuestions) {
      const randomNumber = Math.floor(Math.random() * totalNumberOfQuestions);
      if (!generatedNumbers.has(randomNumber)) {
        generatedNumbers.add(randomNumber);
      }
    }
  
    return Array.from(generatedNumbers);
  }

  export type optionToIdxMap = {
    'a': number;
    'b': number;
    'c': number;
    'd': number;
  };

  export const optionToIdxMap: optionToIdxMap = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3
  }