var t_b = 100000; //total belanjaan

// Jika totalnya lebih dari 100rb, discount 15%
// Jika totalnya lebih dari 70rb, discount 10%
// Dibawah 70rb discount 5%

// result
// Total belanja : 100000
// Total discount : 8000
// Total yg dibayar : 72000

if(t_b > 100000) {
    discount = t_b * 15 / 100 
} else if (t_b <= 100000 && t_b > 70000) {
    discount = t_b * 10 / 100
} else if (t_b <= 70000) {
    discount = t_b * 5 / 100
}

var total_bayar = t_b - discount

console.log(`Total belanja: ${t_b} 
Total discount: ${discount} 
Total yg dibayar: ${total_bayar}`)