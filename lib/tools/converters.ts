export const makeUppercase = (text: string) => text.toUpperCase();

export const makeLowercase = (text: string) => text.toLowerCase();

export const makeCapitalizeWord = (text: string) =>
  text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const makeCapitalizeSentence = (text: string) =>
  text
    .toLowerCase()
    .split(/(\. |\n)/)
    .map((sentence, index, arr) =>
      index % 2 === 0
        ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
        : sentence
    )
    .join("");
