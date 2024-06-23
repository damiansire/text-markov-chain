const fs = require("fs");

async function readTxt(filePath: string) {
  try {
    const data = await fs.promises.readFile(filePath, "utf-8");
    return data;
  } catch (err) {
    console.error("Failed to read the file:", err);
    throw err;
  }
}

module.exports = { readTxt };
