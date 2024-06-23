class TransitionMatrix {
  transitionMatrix: Record<string, Record<string, number>>;
  constructor() {
    this.transitionMatrix = {};
  }
  showMatrix() {
    console.log(this.transitionMatrix);
  }
}

function createTransitionMatrix(text: string) {
  const transitionMatrix = new TransitionMatrix();
  transitionMatrix.showMatrix();
}

function predict(text: string) {
  createTransitionMatrix(text);
}

module.exports = { predict };
