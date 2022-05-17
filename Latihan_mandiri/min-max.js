var nums = [2, 5, 3, 4, -98];
var min, max;

nums.forEach((val, index) => {
  if (index == 0) {
    min = val;
    max = val;
  }

  if (index != 0) {
    if (val > max) {
      max = val;
    } else if (val < min) {
      min = val;
    }
  }
});

console.log(`Min : ${min}\nMax : ${max}`);
// [2, 5, 3]; min : 2 , max : 5
// [5]; min : 5, max : 5
