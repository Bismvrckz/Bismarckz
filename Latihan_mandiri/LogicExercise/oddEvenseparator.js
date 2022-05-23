///////////////////////////////////////////////////////////////////////
// Buat sebuah function yang dapat memisahkan nilai genap dan ganjil //
// dataawal = [11, 22, 34, 41, 52, 63, 71, 86,]                      //
// hasil = [ [11, 41, 63 ,71], [22, 34, 52, 86] ]                    //
///////////////////////////////////////////////////////////////////////

var oddEvenSeparator = (arr) => {
    var ganjil = [];
    var genap = [];
    var hasil;
    var pemisah = (x) => {
      if (x % 2 == 1) {
        ganjil.push(x);
      } else {
        genap.push(x);
      }
    };
    arr.forEach(pemisah);
    hasil = [ganjil, genap];
    return hasil;
  };
  
  // result = [ [11, 41, 63 ,71], [22, 34, 52, 86] ]
  var result = oddEvenSeparator([11, 22, 34, 41, 52, 63, 71, 86]);
  console.log(result);