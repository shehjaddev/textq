export const countCharacters = (text: string) =>
  text
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .length.toString() + " characters";

export const countWords = (text: string) =>
  text
    .replace(/\s+/g, " ")
    .split(" ")
    .filter((word) => word !== "")
    .length.toString() + " words";

export const countSentences = (text: string) =>
  text
    .replace(/\s+/g, " ")
    .split(".")
    .filter((sentence) => sentence !== "")
    .length.toString() + " sentences";

export const countLines = (text: string) =>
  text
    .split("\n")
    .filter((line) => line.trim() !== "")
    .length.toString() + " lines";
