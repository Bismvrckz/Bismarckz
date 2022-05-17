var hargaKotor = 120000;

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
