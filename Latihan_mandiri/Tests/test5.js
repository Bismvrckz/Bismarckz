function solution(list) {
  let result = [];
  let lastNumNext;
  list.forEach((number, index) => {
    if (result.length === 0) {
      let tempResult = [number];
      let nextNumIdx = index + 1;
      for (
        let currNumNext = number + 1;
        list[nextNumIdx] == currNumNext;
        currNumNext++, nextNumIdx++
      ) {
        tempResult.splice(1, 1, list[nextNumIdx]);
      }
      let tempResultLength;
      if (tempResult.length > 1) {
        tempResultLength = Math.abs(
          tempResult.reduce((acc, curr) => acc - curr)
        );
      }
      if (tempResultLength < 2) {
        result.push(`${tempResult[0]}`);
        result.push(`${tempResult[1]}`);
      } else {
        result.push(tempResult.join("-"));
      }
      lastNumNext = list[nextNumIdx];
    } else if (lastNumNext == number) {
      let tempResult = [number];
      let nextNumIdx = index + 1;
      for (
        let currNumNext = number + 1;
        list[nextNumIdx] == currNumNext;
        currNumNext++, nextNumIdx++
      ) {
        tempResult.splice(1, 1, list[nextNumIdx]);
      }
      let tempResultLength;
      if (tempResult.length > 1) {
        tempResultLength = Math.abs(
          tempResult.reduce((acc, curr) => acc - curr)
        );
      }
      if (tempResultLength < 2) {
        result.push(`${tempResult[0]}`);
        result.push(`${tempResult[1]}`);
      } else {
        result.push(tempResult.join("-"));
      }
      lastNumNext = list[nextNumIdx];
    }
  });
  return result.join(",");
}
console.log(
  solution([
    -51, -49, -48, -46, -44, -43, -41, -40, -37, -36, -34, -32, -29, -26, -23,
    -21, -18, -15, -14, -13, -11, -9, -8, -5, -3, 0, 2, 4, 7, 10, 13,
  ])
);

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

// solution([-51, -49, -48, -46, -44, -43, -41, -40, -37, -36, -34, -32, -29, -26, -23,
    -21, -18, -15, -14, -13, -11, -9, -8, -5, -3, 0, 2, 4, 7, 10, 13,]);
// // returns "-51,-49,-48,-46,-44,-43,-41,-40,-37,-36,-34,-32,-29,-26,-23,-21,-18,-15,-14,-13,-11,-9,-8,-5,-3,0,2,4,7,10,13"
