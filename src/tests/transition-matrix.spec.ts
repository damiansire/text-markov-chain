const TransitionMatrixModule = require("../libs/transition-matrix");

describe("TransitionMatrix", () => {
  let TransitionMatrix = TransitionMatrixModule.TransitionMatrix;

  beforeAll(() => {
    expect(TransitionMatrixModule).toBeDefined();
  });

  describe("addElement", () => {
    it("add one element", () => {
      const transitionMatrix = new TransitionMatrix();
      transitionMatrix.addElement("passed", "many");
      const ocurrences = transitionMatrix.getOcurrences("passed", "many");
      const amount = transitionMatrix.getAmountInState("passed");
      expect(ocurrences).toBe(1);
      expect(amount).toBe(1);
    });
    it("add four elements to the same key", () => {
      const transitionMatrix = new TransitionMatrix();
      transitionMatrix.addElement("passed", "many");
      transitionMatrix.addElement("passed", "many");
      transitionMatrix.addElement("passed", "many");
      transitionMatrix.addElement("passed", "many");
      const ocurrences = transitionMatrix.getOcurrences("passed", "many");
      const amount = transitionMatrix.getAmountInState("passed");
      expect(ocurrences).toBe(4);
      expect(amount).toBe(4);
    });
    it("add three elements with different keys", () => {
      const transitionMatrix = new TransitionMatrix();
      transitionMatrix.addElement("passed", "many");
      transitionMatrix.addElement("passed", "many");
      transitionMatrix.addElement("passed", "many");
      transitionMatrix.addElement("passed", "few");
      transitionMatrix.addElement("something", "more");
      transitionMatrix.addElement("more", "than");
      const ocurrences = transitionMatrix.getOcurrences("passed", "many");
      expect(ocurrences).toBe(3);
      const ocurrences1 = transitionMatrix.getOcurrences("something", "more");
      expect(ocurrences1).toBe(1);
      const ocurrences2 = transitionMatrix.getOcurrences("more", "than");
      expect(ocurrences2).toBe(1);
      const amount = transitionMatrix.getAmountInState("passed");
      expect(amount).toBe(4);
    });
  });
});
