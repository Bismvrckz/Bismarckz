var berat
while(!berat){
    berat = parseInt(prompt(`Masukan berat badan anda! (KG)`))
}

var tinggi
while(!tinggi){
    tinggi = parseFloat(prompt(`Masukan tinggi badan anda! (Meter)`))
}

var imt = berat / Math.pow(tinggi, 2)
var kategori

if(imt < 18.5){
    kategori = `Kurang`
}else if(imt >= 18.5 && imt <= 24.9){
    kategori = `Ideal`
}else if(imt >= 25.0 && imt <= 29.9){
    kategori = `Berlebih`
}else if(imt >= 30.0 && imt <= 39.9){
    kategori = `Sangat Berlebih`
}else if(imt > 39.9){
    kategori = `Obesitas`
}

var result = `Berat badan anda: ${berat}\nDengan tinggi badan: ${tinggi}\nIMT Anda:${imt}\nBerat badan anda: ${kategori}`
alert(result)