const cleanText = (text: string) => {
  let sanitizedText = text.replace(/\r\n\r\n/g, " "); // delete all \r\n\r\n
  sanitizedText = sanitizedText.replace(/\s+/g, " "); // delete multiples space
  sanitizedText = sanitizedText.trim();
  return sanitizedText;
};

module.exports = { cleanText };
