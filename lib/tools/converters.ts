export const makeUppercase = (text: string) => text.toUpperCase();

export const makeLowercase = (text: string) => text.toLowerCase();

export const makeCapitalizeWord = (text: string) =>
  text
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word.startsWith(`"`) || word.startsWith(`'`)) {
        return `${word.charAt(0)}${word.charAt(1).toUpperCase()}${word.slice(
          2
        )}`;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

export const makeCapitalizeSentence = (text: string) =>
  text
    .toLowerCase()
    .split(/(\. |\n)/)
    .map((sentence, index) => {
      if (index % 2 === 0) {
        return sentence.replace(
          /(^["'“‘]*)(\w)/,
          (match, p1, p2) => p1 + p2.toUpperCase()
        );
      }
      return sentence;
    })
    .join("");
