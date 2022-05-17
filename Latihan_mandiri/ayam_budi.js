 // budi beli ayam, harga nya 150 ribu. uang budi cuma 97 ribu. berapa uang budi yg kurang? 


var ha = 150000 //harga ayam
var ub = 1500 //uang budi
var sum =  ub - ha
pas  = sum == 0

if(sum > 0) {
    console.log("Uang budi sisa:", sum,"Rupiah")
} 

if(sum < 0) {
    console.log("Uang budi kurang:", Math.abs(sum),"Rupiah")
}

if(ub == ha) {
    console.log("Uang budi pas")
}