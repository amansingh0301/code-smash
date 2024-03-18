const fs = require('fs');

function processQuestion(text, index) {
  // Split the question text and answer explanation
  const [question, answerExplanation] = text.split('Answer:');

  // Extract question number
  const questionNo = index;

  const firstPipeIndex = question.indexOf('|');
  const questionDesc = question.substring(0, firstPipeIndex).trim();

  const options = question.substring(firstPipeIndex + 1)
  .trim()
  .split('\n') // Split by new lines
  .map(option => option.replace(/^\||\|$|\<|\>/g, '').trim());

  const answer = answerExplanation.match(/\((\w+)\)/)[1];

  const explanationStartIndex = answerExplanation?.indexOf('Explanation:') ? answerExplanation?.indexOf('Explanation:') + 12 : null; // Skip "Explanation: "
//   const explanationEndIndex = answerExplanation.lastIndexOf('.'); // Find last sentence before answer

// Extract the explanation
  const explanation = explanationStartIndex ? answerExplanation.substring(explanationStartIndex).trim() : null;

// Extract the answer
   // Use regex to capture answer within parentheses

  return {
    questionNo,
    question: questionDesc.replace('[Q.','').trim().replace(/\r/g, ""),
    options, // Join options with pipe as separator
    answer,
    explanation: explanation.replace(/\r/g, ""),
  };
}

function main() {
  const filePath = 'question-set2.txt'; // Replace with your actual file path
  const outputFilePath = 'output.json';

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Split the data by question sections
    const questions = data.trim().split(']');

    // Process each question and create JSON objects
    const jsonData = questions.filter(data => data ? data : '').map(processQuestion);

    // Write the processed data to JSON file
    fs.writeFile(outputFilePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log(`Successfully processed data and wrote to ${outputFilePath}`);
    });
  });
}

main();
