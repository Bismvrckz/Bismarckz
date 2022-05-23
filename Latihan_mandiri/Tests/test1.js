function century(year) {
  let split = `${year}`.split("");
  let comma = split.map((num, index) => {
    split.length;
    if (index == 2) {
      return `.${num}`;
    }
    return `${num}`;
  });
  return Math.ceil(comma.join(""));
}

console.log(century(2010));
