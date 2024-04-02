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

  export const generateRoomCode = () => {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  }

  export const generateUserId = () => {
    // Ensure the number starts with a non-zero digit to avoid leading zeros
    while (true) {
      const uniqueNumber = Math.floor(Math.random() * (9000000000 - 100000000) + 1000000000);
      if (uniqueNumber.toString().length === 10) {
        return uniqueNumber.toString();
      }
    }
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