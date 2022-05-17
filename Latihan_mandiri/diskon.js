var hargaKotor = 120000; //total belanjaan

// Jika totalnya lebih dari 100rb, discount 15%
// Jika totalnya lebih dari 70rb, discount 10%
// Dibawah 70rb discount 5%

// result
// Total belanja : 100000
// Total discount : 8000
// Total yg dibayar : 72000

if (hargaKotor > 100000) {
  discount = (hargaKotor * 15) / 100;
} else if (hargaKotor <= 100000 && hargaKotor > 70000) {
  discount = (hargaKotor * 10) / 100;
} else if (hargaKotor <= 70000) {
  discount = (hargaKotor * 5) / 100;
}

var hargaBersih = hargaKotor - discount;

console.log(`Total belanja: ${hargaKotor} 
Total discount: ${discount} 
Total yg dibayar: ${hargaBersih}`);
