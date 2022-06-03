function order(words) {
  let word = words.split(" ");
  let sortedWord = word.sort((word1, word2) => {
    word1 = word1.split("");
    let word1num = word1.filter((char) => {
      if (char - 1) {
        return true;
      }
    });

    word2 = word2.split("");
    let word2num = word2.filter((char) => {
      if (char - 1) {
        return true;
      }
    });

    return word1num - word2num;
  });
  return sortedWord;
}

console.log(order("is2 Thi1s T4est 3a"));
