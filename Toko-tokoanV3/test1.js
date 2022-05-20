const function1 = (n) => {
  let numStr = `${n}`;
  let numSplit = numStr.split("");
  while (numSplit.length > 1) {
    let sum = 0;
    numSplit.forEach((number) => {
      sum += number;
    });
  }
};

let number = 1732;
console.log(function1(number));
