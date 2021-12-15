export const shortenTextFromEnd = (text: string, length: number): string => {
  if (text.length > length) {
    return text.substring(0, length - 3) + '...';
  } else {
    return text;
  }
};
