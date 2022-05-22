//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Buat function yang akan memfilter seseorang yang memiliki umur lebih dari 30
// atau tinggal di Jakarta
// [                                                                                                    //
//   ["John", 43, "Jakarta"],                                                                           //
//   ["Baby", 21, "Jakarta"],                                                                           //
//   ["Tony", 34, "Surabaya"],                                                                          //
//   ["Justin", 29, "Banjarmasin"],                                                                     //
// ];                                                                                                   //
//                                                                                                      //
// [                                                                                                    //
//   ["John", 43, "Jakarta"],                                                                           //
//   ["Baby", 21, "Jakarta"],                                                                           //
//   ["Tony", 34, "Surabaya"],                                                                          //
// ];                                                                                                   //
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var orangorang = [
  ["John", 43, "Jakarta"],
  ["Baby", 21, "Jakarta"],
  ["Tony", 34, "Surabaya"],
  ["Justin", 29, "Banjarmasin"],
];

var ageAddress =  (arr)=> {
  var orangTerpilih = arr.filter((orang) => {
    if (orang[1] > 30 || orang[2] == `Jakarta`) {
      return true;
    }
  });
  return orangTerpilih;
};

var filteredPersons = ageAddress(orangorang);
console.table(filteredPersons);

function minins ()
var jdnasj = ()=>{}