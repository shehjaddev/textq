export const extractEmails = (text: string) => {
  const emailRegex = /\S+@\S+\.\S+/g;
  const matches = text.match(emailRegex);
  return matches
    ? matches.map((email) => email.replace(/[,\.]*$/, "")).join("\n")
    : "";
};

export const extractURLs = (text: string) => {
  const urlRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const matches = text.match(urlRegex);
  return matches ? matches.join("\n") : "";
};
