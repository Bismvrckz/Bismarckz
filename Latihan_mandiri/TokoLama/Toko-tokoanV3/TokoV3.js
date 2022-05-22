class Buah {
  constructor(buah, harga, jumlah) {
    this.name = buah;
    this.price = harga;
    this.qty = jumlah;
  }
}

let fruitStock = [];

fruitStock.push(new Buah(`Apple`, 10000, 10));
fruitStock.push(new Buah(`Grape`, 15000, 10));
fruitStock.push(new Buah(`Orange`, 18000, 10));

const checkoutText = (x, y = "", z = "") => {
  let list = `${y}\n\n`;
  let hargaTotal = 0;
  x.forEach((fruit, i) => {
    i++;
    let total = fruit.price * fruit.qty;
    list += `\n${i}.name: ${
      fruit.name
    } || price: Rp.${fruit.price.toLocaleString("id")}*${
      fruit.qty
    } = Rp.${total.toLocaleString("id")}`;
    hargaTotal += total;
  });
  list += `\n\n${z}`;
  list += `\nHarga total: Rp.${hargaTotal.toLocaleString("id")}`;
  return list;
};

const createFruitList = (x, y, z = "") => {
  let list = `${y}\n\n`;
  x.forEach((fruit, i) => {
    i++;
    list += `${i}.name: ${fruit.name} || price: Rp.${fruit.price.toLocaleString(
      "id"
    )} || qty: ${fruit.qty}\n`;
  });
  list += `\n\n${z}`;
  return list;
};
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

while (menu != 5) {
  let cart = [];
  var menu = parseInt(
    prompt(
      `\nSilahkan ketik tujuan anda:\n\n1. Menampilkan daftar buah\n2. Menambah buah\n3. Menghapus buah\n4. Membeli buah\n5. Exit`
    )
  );
  if (!menu) {
    alert(`Isi yang bener dong gan.`);
    continue;
  }
  while (menu == 1) {
    alert(createFruitList(fruitStock, "Daftar buah yang tersedia sekarang:"));
    break;
  }
  while (menu == 2) {
    let tambahanBuahLama;
    let namaBuah = capitalizeFirstLetter(
      prompt(
        createFruitList(
          fruitStock,
          `Masukan nama buah yang anda ingin masukan ke stock.`
        )
      )
    );
    fruitStock.forEach((x) => {
      if (x.name == namaBuah) {
        tambahanBuahLama = parseInt(
          prompt(`Masukan jumlah ${x.name} yang ingin anda tambah!`)
        );
        x.qty += tambahanBuahLama;
        alert(createFruitList(fruitStock));
      }
    });
    if (!tambahanBuahLama || !(tambahanBuahLama + 1)) {
      let hargaBuahBaru = parseInt(prompt(`Masukan harga buah ${namaBuah}.`));
      let stokBuahBaru = parseInt(prompt(`Masukan stok buah ${namaBuah}`));
      fruitStock.push(new Buah(namaBuah, hargaBuahBaru, stokBuahBaru));
      alert(createFruitList(fruitStock));
    }
    break;
  }
  while (menu == 3) {
    let hapusBuah = parseInt(
      prompt(
        createFruitList(fruitStock, "Pilih nomor buah yang ingin anda hapus!")
      )
    );
    fruitStock.splice(hapusBuah - 1, 1);
    alert(createFruitList(fruitStock, "Buah yang tersedia saat ini:"));
    break;
  }
  while (menu == 4) {
    let nomorTambahBuahCart = parseInt(
      prompt(
        createFruitList(fruitStock, "Ketik nomor buah yang ingin anda tambah")
      )
    );
    nomorTambahBuahCart--;
    let buahSama = [];
    cart.forEach((x, y) => {
      if (fruitStock[nomorTambahBuahCart].name == x.name) {
        buahSama.push(1, y);
        console.log(buahSama);
      }
    });
    console.log(buahSama);
    if (!(nomorTambahBuahCart + 1)) {
      alert(`Masukan angka yang bener dong!`);
      continue;
    } else if (nomorTambahBuahCart > fruitStock.length - 1) {
      alert(`Blom ada nomor ${nomorTambahBuahCart + 1} gan.`);
      continue;
    } else {
      while (true) {
        let tambahQtyCart = parseInt(
          prompt(
            `Masukan jumlah ${fruitStock[nomorTambahBuahCart].name} yang anda inginkan! (stok: ${fruitStock[nomorTambahBuahCart].qty})`
          )
        );
        if (!tambahQtyCart || !(tambahQtyCart + 1)) {
          alert(`Yang bener dong gan`);
          continue;
        } else if (tambahQtyCart > fruitStock[nomorTambahBuahCart].qty) {
          alert(`Kebanyakan gan`);
          continue;
        } else if (buahSama[0]) {
          cart[buahSama[1]].qty += tambahQtyCart;
          fruitStock[nomorTambahBuahCart].qty -= tambahQtyCart;
          break;
        } else {
          cart.push(
            new Buah(
              fruitStock[nomorTambahBuahCart].name,
              fruitStock[nomorTambahBuahCart].price,
              tambahQtyCart
            )
          );
          fruitStock[nomorTambahBuahCart].qty -= tambahQtyCart;
          break;
        }
      }
    }
    let lanjutBelanja = confirm(
      createFruitList(
        cart,
        "Buah yang anda masukan cart",
        "Apakah lanjut belanja?"
      )
    );
    if (lanjutBelanja) {
      continue;
    }
    while (!lanjutBelanja) {
      let totalHarga = 0;
      cart.forEach((x) => {
        let tambah = x.price * x.qty;
        totalHarga += tambah;
      });
      let saldo = parseInt(
        prompt(
          checkoutText(
            cart,
            "Total belanja anda adalah:",
            "Masukan saldo anda di bawah."
          )
        )
      );
      if (!saldo || !(saldo + 1)) {
        alert(`Yang bener" aja dong gan`);
        continue;
      } else if (saldo < totalHarga) {
        alert(`Uang anda kurang`);
        continue;
      } else if (saldo > totalHarga) {
        let sisa = saldo - totalHarga;
        alert(
          `Terimakasih, saldo anda bersisa Rp.${sisa.toLocaleString("id")}`
        );
        break;
      } else if (saldo == totalHarga) {
        alert(`Terimakasih, saldo anda pas.\nGausah ditungguin.`);
        break;
      }
    }

    break;
  }
}
