function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result : " + num);
}

let combinedValues: (a: number, b: number) => number;

printResult(add(12, 13));

combinedValues = add;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(30, 20, (num) => console.log(num));
