const { readTxt } = require("./libs/file");
const { predict } = require("./libs/markov");
const { TransitionMatrix } = require("./libs/transition-matrix");

const main = async () => {
  console.log(readTxt);
  const text = await readTxt("src/tests/source.txt");
  console.log(text);
  const transitionMatrix = new TransitionMatrix();
  transitionMatrix.addElement("passed", "many");
  transitionMatrix.addElement("passed", "many");
  transitionMatrix.addElement("passed", "many");
  transitionMatrix.addElement("passed", "few");
  transitionMatrix.addElement("something", "more");
  transitionMatrix.addElement("more", "than");
  transitionMatrix.showMatrix();
  //predict(text);
};
main();

export default main;

// For CommonJS default export support
module.exports = main;
module.exports.default = main;
module.exports.__esModule = true;
