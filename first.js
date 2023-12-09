function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
  
    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      const character = sentence[i];
  
      // Increment the length counter
      length++;
  
      // Check if the character is a space
      if (character === ' ') {
        // Increment the word count
        wordCount++;
      }
  
      // Check if the character is a vowel (case-insensitive)
      if (/[aeiou]/i.test(character)) {
        // Increment the vowel count
        vowelCount++;
      }
    }
  
    // Increment the word count by 1 to account for the last word
    wordCount++;
  
    // Return the results
    return {
      length,
      wordCount,
      vowelCount
    };
  }
  
  // Example usage
  const sentence = "This is a sample sentence.";
  const result = analyzeSentence(sentence);
  
  console.log("Length:", result.length);
  console.log("Word Count:", result.wordCount);
  console.log("Vowel Count:", result.vowelCount);