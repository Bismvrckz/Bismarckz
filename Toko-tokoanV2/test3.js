var text = "My name is Alex";

var reverseWord = (words) => {
  var kata = words.split(" ");
  var pemisah = (x) => {
    var kata2 = x.split("");
    kata2.reverse();
    var hasil = kata2.join("");
    return hasil;
  };
  var textPisah = kata.map(pemisah);
  akhir = textPisah.join(" ");
  return akhir;
};

var result = reverseWord(text);
console.log(result); // "Alex is name My"

var tulisan = "Purwadhika";
var splittedTulisan = tulisan.split(""); // [ 'P', 'u', 'r', 'w', 'a', 'd', 'h', 'i','k', 'a']
splittedTulisan.join(""); //"Purwadhika"