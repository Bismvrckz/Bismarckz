/*
jumlah hari = 39

0 tahun
1 bulan
1 minggu
2 hari

1 tahun --> 360 hari
jumlah hari 369
1 tahun
0 bulan
1 minggu
2 hari

- pembagian
- modulus
*/

var jh = 3090 //jumlah hari
var th = 360 //setahun 360 hari
var bl = 30  //sebulan 30 hari
var mg = 7   //seminggu 7 hari
var hr = 1   //sehari

var tahun = Math.floor(jh/th)              //perhitungan tahun
var bulan = Math.floor(jh % th / bl)       //perhitungan bulan
var minggu = Math.floor(jh % th % bl / mg) //perhitungan minggu
var hari = (jh % th % bl % mg / hr)        //perhitungan hari

console.log(jh, "Hari sama dengan =") 
console.log((tahun),"Tahun");
console.log((bulan),"Bulan");
console.log((minggu),"Minggu");
console.log((hari),"Hari");