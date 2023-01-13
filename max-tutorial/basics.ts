function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) console.log(phrase, n1 + n2);
  return n1 + n2;
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;

add(num1, num2, printResult, "Result is : ");
