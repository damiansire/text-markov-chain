interface StateData {
  states: { [to: string]: number };
  amount: number;
}

class TransitionMatrix {
  transitionMatrix: Record<string, StateData>;
  transitionMatrixProb: Record<string, Record<string, number>>;
  constructor() {
    this.transitionMatrix = {};
    this.transitionMatrixProb = {};
  }
  addElement(from: string, to: string) {
    if (!this.transitionMatrix[from]) {
      this.transitionMatrix[from] = {
        states: {
          [to]: 1,
        },
        amount: 1,
      };
    } else if (!this.transitionMatrix[from].states[to]) {
      this.transitionMatrix[from].states[to] = 1;
      this.transitionMatrix[from].amount++;
    } else {
      this.transitionMatrix[from].states[to]++;
      this.transitionMatrix[from].amount++;
    }
  }
  updateTransitionProb() {}
  getOcurrences(from: string, to: string) {
    return this.transitionMatrix[from].states[to];
  }
  getAmountInState(fromState: string) {
    return this.transitionMatrix[fromState].amount;
  }
  showMatrix() {
    console.log(this.transitionMatrix);
  }
}

module.exports = { TransitionMatrix };
