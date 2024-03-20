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