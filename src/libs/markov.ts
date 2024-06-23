const transitionMatrixModule = require("./transition-matrix").TransitionMatrix;

function createTransitionMatrix(text: string) {
  const transitionMatrix = new TransitionMatrix();
}

function predict(text: string) {
  createTransitionMatrix(text);
}

module.exports = { predict };
