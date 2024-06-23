class TransitionMatrix {
  transitionMatrix: Record<string, Record<string, number>>;
  constructor() {
    this.transitionMatrix = {};
  }
  addElement(from: string, to: string) {
    if (!this.transitionMatrix[from]) {
      this.transitionMatrix[from] = {
        [to]: 1,
      };
    } else if (!this.transitionMatrix[from][to]) {
      this.transitionMatrix[from][to] = 1;
    } else {
      this.transitionMatrix[from][to]++;
    }
  }
  getOcurrences(from: string, to: string) {
    return this.transitionMatrix[from][to];
  }
  showMatrix() {
    console.log(this.transitionMatrix);
  }
}

module.exports = { TransitionMatrix };
