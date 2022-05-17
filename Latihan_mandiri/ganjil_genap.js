// Ganjil & Genap

var number = 729849179;
// Write you code here
if (number % 2 == 0) {
  console.log(`Angka ${number} adalah angka genap.`);
} else {
  console.log(`Angka ${number} adalah angka ganjil.`);
}
// Angka 9 adalah ganjil
// Angka 10 adalah genap

//////////////////////////////////////////////////////////////////
// Sebuah function yang dapat menentukan nilai genap dan ganjil //
// [1, 2, 3, 4]                                                 //
// [ [1, "Ganjil"], [2, "Genap"], [3, "Ganjil"], [4, "Genap"] ] //
//////////////////////////////////////////////////////////////////

var numbers = [1, 2, 3, 4, 9, 23, 3, 9998];
var oddEven = (arr) => {
  var result = arr.map((val) => {
    var angka = [];
    if (val % 2 == 1) {
      angka.push(val, "Ganjil");
    } else {
      angka.push(val, `Genap`);
    }
    return angka;
  });
  return result; //
};

var mappedOddEven = oddEven(numbers);
// [ [1, "Ganjil"], [2, "Genap"], [3, "Ganjil"], [4, "Genap"] ]
console.log(mappedOddEven);
