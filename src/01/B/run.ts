import getDataArrayAsync from "../../helpers/getFileData";

export const exampleFilePath = __dirname + "/example.txt";
export const realfilePath = __dirname + "/data.txt";

export default async function parseArrayAsync(filePath: string) {
  try {
    const stringArray = (await getDataArrayAsync(filePath))!;

    return getCalibrationSum(stringArray);
  } catch (error) {
    console.error(error);
  }
}

// Parse and Calculate calibration values
export function getCalibrationSum(dataArray: string[]) {
  // Check if letter or number
  let sum = 0;
  [...dataArray].forEach((data) => {
    sum += getDigits(data);
  });

  return sum;
}

export function getDigits(stringData: string): number {
  const firstDigit = getFirstDigitWord(stringData)!;
  const secondDigit = getSecondDigitWord(stringData)!;
  return parseInt(`${firstDigit}${secondDigit}`);
}

function getFirstDigitWord(word: string) {
  // "threeone" -> "three"
  const wordCopy = [...word];
  let parsedWord = "";

  loop1: for (let i = 0; i < wordCopy.length; i++) {
    // word
    if (!isNaN(Number(wordCopy[i]))) return parseInt(wordCopy[i]);

    loop2: for (let j = 0; j < DIGIT_WORDS.length; j++) {
      // DIGIT
      const digit = j;
      if (DIGIT_WORDS.includes(parsedWord)) return digit;
      parsedWord = "";

      loop3: for (let k = 0; k < DIGIT_WORDS[j].length; k++) {
        // DIGIT Letters
        const digitLetter = DIGIT_WORDS[j][k];
        const wordLetter = wordCopy[i + k];
        if (digitLetter === wordLetter) {
          parsedWord += wordCopy[i + k];

          const digit = j + 1;
          if (DIGIT_WORDS.includes(parsedWord)) return digit;

          continue;
        }

        break loop3;
      }
    }
  }

  return 0;
}

function getSecondDigitWord(word: string) {
  // "threeone" -> "one"
  const wordCopy = [...word];
  let parsedWord = "";

  loop1: for (let i = wordCopy.length - 1; i >= 0; i--) {
    // word
    if (!isNaN(Number(wordCopy[i]))) return parseInt(wordCopy[i]);

    loop2: for (let j = 0; j < DIGIT_WORDS.length; j++) {
      // DIGI
      parsedWord = "";

      loop3: for (let k = 0; k < DIGIT_WORDS[j].length; k++) {
        // DIGIT Letters
        const digitLetterIndex = DIGIT_WORDS[j].length - 1 - k;
        const wordLetterIndex = i - k;
        const digitLetter = DIGIT_WORDS[j][digitLetterIndex];
        const wordLetter = wordCopy[wordLetterIndex];

        if (digitLetter === wordLetter) {
          parsedWord = wordCopy[i - k] + parsedWord;

          const digit = j + 1;
          if (DIGIT_WORDS.includes(parsedWord)) return digit;

          continue;
        }

        break loop3;
      }
    }
  }

  return 0;
}

const DIGIT_WORDS = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
