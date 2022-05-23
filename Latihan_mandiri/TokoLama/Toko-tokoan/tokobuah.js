// buah apel
var b_a = prompt("Berapa buah apel yang anda ingin beli?(stok tersisa 5)");
b_a = parseInt(b_a)
if(b_a > 5) {
    alert("Stok hanya tersisa 5")
    b_a = 5
}

// buah mangga
var b_m = prompt("Berapa buah mangga yang anda ingin beli?(stok tersisa 3)")
b_m = parseInt(b_m)
if(b_m > 3) {
    alert("Stok hanya tersisa 3")
    b_m = 3
}

// buah sirsak
var b_s = prompt("Berapa buah sirsak yang anda ingin beli?(stok tersisa 7)")
b_s = parseInt(b_s)
if(b_s > 7) {
    alert("Iya dah, si paling buah emg. Cuma ada 7 maszeh...")
    b_s = 7
}

// total harga
var t_h = b_a * 10000 + b_m * 7000 + b_s * 8000

// total belanja
var t_b = prompt(`Total belanja anda: 
Buah apel: ${b_a} buah x Rp. 10000
Buah mangga: ${b_m} buah x Rp. 7000
Buah sirsak: ${b_s} buah x Rp. 8000
Dengan total harga: Rp. ${t_h}
Silahkan masukan jumlah saldo anda
`)

var j_s = parseInt(t_b) // jumlah saldo
var s_s = j_s - t_h //sisa saldo
var u_p = s_s == 0 //uang pas

if(s_s > 0 && !u_p) {
    alert(`Uang anda bersisa Rp. ${s_s},
buah anda akan segera kami kirim.
Terimakasih telah berbelanja di Tokobuah.com.`)
}
if(s_s < 0 && !u_p) {
     alert(`Uang anda kurang Rp. ${Math.abs(s_s)},
buah tidak akan kami kirim.
Transaksi dibatalkan.`)
}
if(u_p) {
    alert(`Uang anda pas,
buah anda akan segera kami kirim.
Terimakasih telah berbelanja di Tokobuah.com.`)
}