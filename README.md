# Val's Rule: String Encoding
> This section is all about my own String/Text Encoding, made by me! This fully documents how to use "Val's Rule" and examples to help understand.

GitHub Gist: https://gist.github.com/VallionXD/24ca1277d51dd251b18dda56613bf298
Webpage: https://vallionxd.github.io/Vals-Rule

## What is Val's Rule?
Val's Rule is a custom encoding method designed to transform messages into a coded format. The resulted message is still decodable using Val's Rule, if this rule is done incorrectly, decoding the message will be much harder as it is improperly encoded.

## How can I create my own "Pattern"?
Creating a "Pattern" is simple, a pattern will help decode your message using Val's Rule. Here is how it can be done, this is my example "Pattern" below.

**Val**-*v88W4V*-*a9sZ3d*-*b6tY7u*-*c5xX2z*-*d4wW1q*-*e3vV8r*-*f2uU9s*-*g1tT0y*-*h7sS5x*-*i6rR4v*-**6**

So you may be thinking, that looks like a bunch of garbage, but it isn't. Here's it broken down into three segments

1. The word "Val", used to tell it's a pattern using Val's Rule.
2.  A bunch of *randomized* strings, **maintaining** the same length or else the rule is *improperly* done.
3. The length of each string, this is key as if one of the strings length is not the same as this number, that "Pattern" will be counted as incorrect. It is also placed in brackets, important for a script to decode it.

So that's the "Pattern" broken down simply.

## How can I use Val's Rule?
Using Val's Rule is quite simple, once you've got your pattern you can get started! Just note that by hand/manually this process will take a very long time. My pattern  for this example is below.

**Val**-*v88W4V*-*a9sZ3d*-*b6tY7u*-*c5xX2z*-*d4wW1q*-*e3vV8r*-*f2uU9s*-*g1tT0y*-*h7sS5x*-*i6rR4v*-**(6)**

Now let's get straight to encoding, decoding is for after. So let's say I want to encode the basic sentence below

*Lorem ipsum dolor sit amet*

So, how this rule works is placing one of the *randomized* strings in-between each letter, this makes Val's Rule very simple, yet effective. Each word encoded is listed below.

| Original | Encoded |
|--|--|
| Lorem | Lv88W4Vod4wW1qri6rR4veh7sS5xm |
| ipsum | if2uU9spa9sZ3dsg1tT0yui6rR4vm |
| dolor | dg1tT0yoi6rR4vlh7sS5xoe3vV8rr |
| sit | sg1tT0yiv88W4Vt |
| amet | ae3vV8rmd4wW1qea9sZ3dt |

Now here's the first word in that table broken down.

**L** *v88W4V* **o** *d4wW1q* **r** *i6rR4v* **e** *h7sS5x* **m**

You can see, that this isn't so hard once broken down. But you may see it will take a while to do all of that which is why I made  a script using **JavaScript** to automate this process, it will take your "Pattern" and your string, and turns it into a "Message".

**"Pattern"**: A pattern for Val's Rule, used to help encode and decode a "Message"
**"Message"**: A encoded string using Val's Rule, and a "Pattern".

## Encode string in Val's Rule: JavaScript

```JavaScript
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

// Set your pattern and string, use the encoder, and log the result in the console
let pattern = "Val-v88W4V-a9sZ3d-b6tY7u-c5xX2z-d4wW1q-e3vV8r-f2uU9s-g1tT0y-h7sS5x-i6rR4v-(6)";
let string = "Lorem ipsum dolor sit amet";
let encodedString = encodeValsRule(pattern, string);
console.log(encodedString);
```

The provided JavaScript function `encodeValsRule` automates the encoding process. By inputting a pattern and a string, the function inserts randomized strings between each letter according to Val's Rule. The encoded message is then logged to the console.

## Decode string in Val's Rule: JavaScript
``` JavaScript
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

// Set your pattern and encoded string, use the decoder, and log the result in the console
let pattern = "Val-v88W4V-a9sZ3d-b6tY7u-c5xX2z-d4wW1q-e3vV8r-f2uU9s-g1tT0y-h7sS5x-i6rR4v-(6)";
let encodedString = "Lf2uU9soa9sZ3drd4wW1qeb6tY7umc5xX2z c5xX2ziv88W4Vpv88W4Vsh7sS5xuc5xX2zmc5xX2z v88W4Vdd4wW1qoi6rR4vlv88W4Voc5xX2zra9sZ3d c5xX2zse3vV8rii6rR4vth7sS5x g1tT0yai6rR4vmh7sS5xef2uU9st";
let decodedString = decodeValsRule(pattern, encodedString);
console.log(decodedString);
```
The corresponding decoding function, `decodeValsRule`, takes a pattern and an encoded string. It identifies and removes the randomized strings, reconstructing the original message. The decoded message is then logged to the console.

## Conclusion
Val's Rule provides a straightforward yet effective method for encoding and decoding messages. The JavaScript functions presented offer a practical way to implement Val's Rule encoding and decoding, streamlining the process for users. Experimenting with different patterns and messages allows for customization and exploration of this unique encoding approach.
