function domainName(url) {
  let urlSplit = url.split("");
  let target = `.com`;
  let tagetEnd = [`/`, `.`];
  let endIdx;
  urlSplit.forEach((char, idx) => {
    let i;
    let charIdx;
    for (
      i = 0, charIdx = idx;
      i < target.length && urlSplit[charIdx] == target[i];
      i++, charIdx++
    ) {
      if (i == target.length - 1) {
        endIdx = idx;
      }
    }
    if (endIdx) {
      tagetEnd.forEach((end) => {
        for (charIdx = endIdx; charIdx > 0; charIdx--) {
          if (urlSplit[charIdx] == end) {
            console.log(urlSplit[charIdx]);
          }
        }
      });
    }
  });
}
console.log(domainName("http://www.zombie-bites.com"));
// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
