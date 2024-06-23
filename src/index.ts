const { readTxt } = require("./libs/file");
const { TransitionMatrix } = require("./libs/transition-matrix");

const main = async () => {
  const text = await readTxt("src/tests/source.txt");
  console.log(text);
  const transitionMatrix = new TransitionMatrix(text);
  transitionMatrix.showMatrix();
  //predict(text);
};
main();

export default main;

// For CommonJS default export support
module.exports = main;
module.exports.default = main;
module.exports.__esModule = true;
