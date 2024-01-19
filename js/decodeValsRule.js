const decodeValsRule = (pattern, encodedString) => {
    // Split the pattern to get the randomized strings, and the length of them.
    const cleanedPattern = pattern.replace(/Val-|\(\d+\)|_/g, '');

    // Extract the randomized strings.
    const regex = /([a-zA-Z\d]+)/g;
    const matches = cleanedPattern.match(regex);

    // Create an array with the randomized strings, to use in decoding.
    const randomizedStrings = matches ? matches : [];
    let cleanedString = encodedString;
    
    // Iterate through each randomizedString and check if it's present in encodedString
    randomizedStrings.forEach(randomizedString => {
        // If the encodedString contains the randomizedString
        cleanedString = cleanedString.split(randomizedString).join('');
    });

    // Return the cleanedString
    return cleanedString;
}