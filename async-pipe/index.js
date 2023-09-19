// Function composition OR
const pipe = (...fns) => {
    return function (x) {
        return fns.reduce((y, f) => f(y), x);// Functions to compose
    }
}

const g = n => n + 1;
const f = n => n * 2;// Imperative composition

const doStuffBadly = x => {
  const afterG = g(x);
  const afterF = f(afterG);
  return afterF;
};// Declarative composition

const doStuffBetter = pipe(g, f);console.log(
  doStuffBadly(20), // 42
  doStuffBetter(20) // 42
);
