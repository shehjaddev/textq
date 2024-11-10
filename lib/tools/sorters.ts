export const makeAscendingWordSort = (text: string) =>
  text
    .replace(/\n/g, "")
    .split(" ")
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
    .join(" ");

export const makeDescendingWordSort = (text: string) =>
  text
    .replace(/\n/g, "")
    .split(" ")
    .sort((a, b) => b.localeCompare(a, undefined, { sensitivity: "base" }))
    .join(" ");

export const makeAscendingLineSort = (text: string) =>
  text
    .split("\n")
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
    .join("\n")
    .replace(/^\n+|\n+$/g, "");

export const makeDescendingLineSort = (text: string) =>
  text
    .split("\n")
    .sort((a, b) => b.localeCompare(a, undefined, { sensitivity: "base" }))
    .join("\n")
    .replace(/^\n+|\n+$/g, "");

export const makeReverseLine = (text: string) =>
  text.split("\n").reverse().join("\n");

export const makeShuffle = (text: string) =>
  text
    .split("\n")
    .map((line) =>
      line
        .split(" ")
        .sort(() => Math.random() - 0.5)
        .join(" ")
    )
    .sort(() => Math.random() - 0.5)
    .join("\n");
