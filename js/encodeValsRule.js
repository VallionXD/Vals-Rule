// Encode in Val's Rule.
const encodeValsRule = (pattern, string) => {
    // Split the pattern to get the randomized strings, and the length of them.
    const cleanedPattern = pattern.replace(/Val-|\(\d+\)|_/g, '');

    // Extract the randomized strings.
    const regex = /([a-zA-Z\d]+)/g;
    const matches = cleanedPattern.match(regex);

    // Create an array with the randomized strings, to use in encoding.
    const randomizedStrings = matches ? matches : [];

    // Add the randomized string to every letter in string.
    const result = [];
    const inputArray = string.split('');

    // Iterate through each character in the inputArray
    inputArray.forEach((char, index) => {
        result.push(char);

        // Check if it's not the last character
        if (index < inputArray.length - 1) {
            // Add a random string between each letter
            const randomString = randomizedStrings[Math.floor(Math.random() * randomizedStrings.length)];
            result.push(randomString);
        }
    });

    // Join the result into a single string and return
    return result.join('');
}
