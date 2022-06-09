var opsi;
var nomor;
var buah = [
  ["Mangga", 7000, 10],
  ["Duren", 9000, 10],
  ["Pisang", 5000, 10],
];

while (opsi != 5) {
  var cart = [];

  /***********************************************************************
   * CART DITARO SINI BIAR SETIAP KALI KE MENU UTAMA CARTNYA KOSONG LAGI *
   ***********************************************************************/

  opsi = prompt(
    `Selamat datang di Tokobuah.com,
silahkan ketik nomor tujuan anda.
 
1.Menampilkan buah.
2.Menambah buah.
3.Menghapus buah.
4.Membeli buah.
5.Exit
                `
  );

  /***************************
   * LIAT BUAH DI ARRAY BUAH *
   ***************************/

  while (opsi == 1) {
    var sumBuah;
    var jumlahTampilan;
    var buahTersedia = `\nBuah yang tersedia saat ini adalah:\n(Nama buah, Harga, Stok)`;

    for (
      jumlahTampilan = 0, sumBuah = buah.length;
      jumlahTampilan < sumBuah;
      jumlahTampilan++
    ) {
      //loop enter text array [buah].
      buahTersedia += `\n${buah[jumlahTampilan]}`;
    }
    alert(buahTersedia);
    opsi = 0;
  }

  /*****************************
   * NAMBAH BUAH KE ARRAY BUAH *
   *****************************/

  while (opsi == 2) {
    //!!!!!opsi2/ buat kalo mau masukin buah ke array buah.
    var sumBuah;
    var jumlahTampilan;
    var buahTersedia = `\nBuah yang tersedia saat ini adalah:\n(Nama buah, Harga, Stok)`;

    for (
      jumlahTampilan = 0, sumBuah = buah.length;
      jumlahTampilan < sumBuah;
      jumlahTampilan++
    ) {
      nomor = jumlahTampilan;
      nomor++;
      buahTersedia += `\n${nomor}.${buah[jumlahTampilan]}`;
    }

    var tambahanBuah = prompt(
      `Masukan nama buah yang anda inginkan.(Huruf kapital di awal)\n${buahTersedia}`
    );
    if (Math.abs(tambahanBuah)) {
      alert(`Huruf ngab, bukan angka`);
      continue;
    }
    var screeningNumber = 0;
    var screeningLimit = buah.length;
    var tambahJumlah;
    while (screeningNumber < screeningLimit) {
      if (tambahanBuah == buah[screeningNumber][0]) {
        tambahJumlah = parseInt(
          prompt(`Buah ${buah[screeningNumber][0]} ingin tambah berapa?`)
        );
        buah[screeningNumber][2] += tambahJumlah;

        var sumBuah;
        var jumlahTampilan;
        var buahTersedia = `\n  Buah yang tersedia saat ini adalah:\n(Nama buah, Harga, Stok)`;

        for (
          jumlahTampilan = 0, sumBuah = buah.length;
          jumlahTampilan < sumBuah;
          jumlahTampilan++
        ) {
          nomor = jumlahTampilan;
          nomor++;
          buahTersedia += `\n${nomor}.${buah[jumlahTampilan]}`;
        }
        alert(buahTersedia);

        opsi = 0;
        break;
      }
      screeningNumber++;
    }
    if (screeningNumber == screeningLimit) {
      screeningNumber--;
    }
    if (tambahanBuah == buah[screeningNumber][0]) {
      break;
    }
    var jumlahBuah = parseInt(prompt(`Masukan harga buah yang anda inginkan.`));
    var stockBuah = parseInt(prompt(`Masukan stok buah yang tersedia.`));
    buah.push([tambahanBuah, jumlahBuah, stockBuah]);

    var sumBuah;
    var jumlahTampilan;
    var buahTersedia = `\nBuah yang tersedia saat ini adalah:\n(Nama buah, Harga, Stok)`;

    for (
      jumlahTampilan = 0, sumBuah = buah.length;
      jumlahTampilan < sumBuah;
      jumlahTampilan++
    ) {
      nomor = jumlahTampilan;
      nomor++;
      buahTersedia += `\n${nomor}.${buah[jumlahTampilan]}`;
    }
    alert(buahTersedia);
    opsi = 0;
  }

  /******************
   * MENGHAPUS BUAH *
   ******************/

  while (opsi == 3) {
    var sumBuah;
    var jumlahTampilan;
    var nomor;
    var textHapus = `\nKetik nomor buah yang ingin anda hapus\n`;
    var buahTersedia = `\nBuah yang tersedia saat ini adalah:\n(Nama buah, Harga, Stok)`;

    for (
      jumlahTampilan = 0, sumBuah = buah.length;
      jumlahTampilan < sumBuah;
      jumlahTampilan++
    ) {
      nomor = jumlahTampilan;
      nomor++;
      textHapus += `\n${nomor}.${buah[jumlahTampilan]}`;
    }

    hapusBuah = parseInt(prompt(textHapus));
    hapusBuah--;
    buah.splice(hapusBuah, 1);

    for (
      jumlahTampilan = 0, sumBuah = buah.length;
      jumlahTampilan < sumBuah;
      jumlahTampilan++
    ) {
      nomor = jumlahTampilan;
      nomor++;
      buahTersedia += `\n${nomor}.${buah[jumlahTampilan]}`;
    }
    alert(buahTersedia);
    opsi = 0;
  }

  /****************
   * MEMBELI BUAH *
   ****************/

  while (opsi == 4) {
    var textBeli = `\nKetik nomor buah yang ingin anda beli\n(Nama buah, Harga, Stok)`;
    var jumlahTampilan;
    var nomor;
    var buahYangDibeli;
    var demand = 0;
    var banyakBelanjaan;
    var lanjutBelanja = 0;
    var textLanjutBelanja = `Keranjang:\n`;

    for (
      jumlahTampilan = 0, sumBuah = buah.length;
      jumlahTampilan < sumBuah;
      jumlahTampilan++
    ) {
      nomor = jumlahTampilan;
      nomor++;
      textBeli += `\n${nomor}.${buah[jumlahTampilan]}`; // (nomor = 1) = (buah[0])
    }

    /**************
     * PILIH BUAH *
     **************/

    buahYangDibeli = parseInt(prompt(textBeli)); //!!!!!pengguna memilih buah berdasarkan nomor
    if (!buahYangDibeli) {
      alert(`Yang mana woy?`);
      continue;
    }
    if (buahYangDibeli > buah.length) {
      alert(`Buah nomor ${buahYangDibeli} blom ada mas.`);
      continue;
    }
    buahYangDibeli--; //!!!!!karena buah nomor 1 adalah array ke 0
    if (buah[buahYangDibeli][2] == 0) {
      alert(`Liat dong, stok nya kosong. Jgn rakus makanya.`);
      continue;
    }

    /********************
     * LOOP MASUKAN QTY *
     ********************/

    while (!demand) {
      //!!!!! loop minta stock
      demand = parseInt(
        prompt(
          `Masukan jumlah yang anda ingin kan. Stock ${buah[buahYangDibeli][0]}: ${buah[buahYangDibeli][2]}`
        )
      );

      /************************************
       * JIKA demand KEBANYAKAN *
       ************************************/

      if (demand > buah[buahYangDibeli][2]) {
        alert(
          `Jumlah yang anda minta: (${demand}), melebihi jumlah stock: (${buah[buahYangDibeli][2]}).`
        );
        demand = 0; //!!!!! biar tetep dalem loop meminta stock
        continue;
      }

      /*****************************
       * KALO DEMAND GK KEBANYAKAN *
       *****************************/

      if (demand <= buah[buahYangDibeli][2]) {
        //!!!!! jika memang valid bahwa demand tidak melebihi stock maka akan di masukan ke dalam cart
        if (cart.length >= 1) {
          var screeningNumber = 0;
          var screeningLimit = cart.length;
          screeningLimit--;

          if (buah[buahYangDibeli][0] == cart[screeningNumber][0]) {
            cart[screeningNumber][2] += demand;
            buah[buahYangDibeli][2] -= demand;
          } else if (!(buah[buahYangDibeli][0] == cart[screeningNumber][0])) {
            screeningNumber = 0;

            while (screeningNumber < screeningLimit) {
              if (buah[buahYangDibeli][0] == cart[screeningNumber][0]) {
                cart[screeningNumber][2] += demand;
                buah[buahYangDibeli][2] -= demand;
                break;
              }
              screeningNumber++;
            }
          }
          if (
            !(buah[buahYangDibeli][0] == cart[screeningNumber][0]) &&
            screeningNumber == screeningLimit
          ) {
            cart.push([
              buah[buahYangDibeli][0],
              buah[buahYangDibeli][1],
              demand,
            ]);
            var cartTerakhir = cart.length;
            cartTerakhir--;
            buah[buahYangDibeli][2] -= cart[cartTerakhir][2]; //!!!!! dan stok buah akan dikurangi dari array buah sesuai dengan jumlah cart
          }
        } else {
          cart.push([buah[buahYangDibeli][0], buah[buahYangDibeli][1], demand]);
          var cartTerakhir = cart.length;
          cartTerakhir--;
          buah[buahYangDibeli][2] -= cart[cartTerakhir][2]; //!!!!! dan stok buah akan dikurangi dari array buah sesuai dengan jumlah cart
        }
      }

      /**********************************
       * LOOP LANJUT BELANJA ATAU TIDAK *
       **********************************/

      while (
        !lanjutBelanja ||
        (!(lanjutBelanja == "ya") &&
          !(lanjutBelanja == "Ya") &&
          !(lanjutBelanja == "tidak") &&
          !(lanjutBelanja == "Tidak"))
      ) {
        var textLanjutBelanja = `Keranjang:\n`;
        var banyakBelanjaan;
        var nomor;
        var saldo;

        for (
          jumlahTampilan = 0, banyakBelanjaan = cart.length;
          jumlahTampilan < banyakBelanjaan;
          jumlahTampilan++
        ) {
          nomor = jumlahTampilan;
          nomor++;
          textLanjutBelanja += `\n${nomor}.${cart[jumlahTampilan]}`;
        }

        textLanjutBelanja += `\n\nApakah anda ingin lanjut belanja?\n(Ya/Tidak)`;

        lanjutBelanja = prompt(textLanjutBelanja);
        if (lanjutBelanja == "ya" || lanjutBelanja == "Ya") {
          opsi = 4;
          break;
        }

        /******************************************************
         * LOOP GAK MAU BELANJA LAGI ALIAS LANJUT KE CHECKOUT *
         ******************************************************/

        while (
          lanjutBelanja == "tidak" ||
          lanjutBelanja == "Tidak" ||
          saldo < totalHarga
        ) {
          //!!!!!loop checkout.
          var textTotalBelanja = `Total belanja anda:\n`;
          var totalBelanja;
          var nomor;
          var totalHarga = 0;
          var totalHargaSatuan = 0;
          var sisaSaldo;

          for (
            jumlahTampilan = 0, totalBelanja = cart.length;
            jumlahTampilan < totalBelanja;
            jumlahTampilan++
          ) {
            //!!!!!loop text checkout.
            nomor = jumlahTampilan;
            nomor++;
            totalHargaSatuan = 0;
            totalHarga += cart[jumlahTampilan][1] * cart[jumlahTampilan][2];
            totalHargaSatuan +=
              cart[jumlahTampilan][1] * cart[jumlahTampilan][2];
            textTotalBelanja += `\n${nomor}.${cart[jumlahTampilan][0]}: ${cart[jumlahTampilan][1]} * ${cart[jumlahTampilan][2]} = ${totalHargaSatuan}`;
          }
          textTotalBelanja += `\n\nTotal harga: ${totalHarga}`;
          textTotalBelanja += `\nMasukan jumlah saldo anda`;

          saldo = parseInt(prompt(textTotalBelanja));

          if (saldo < totalHarga) {
            alert(`Saldo anda tidak cukup!`); //!!!!! kalo saldo gak cukup
            continue;
          } else if (saldo > totalHarga) {
            /***************
             * SALDO LEBIH *
             ***************/
            sisaSaldo = saldo - totalHarga;
            alert(`Saldo anda bersisa: ${sisaSaldo}`);
            opsi = 0; //!!!!!untuk keluar dari loop membeli buah/opsi 4.
            //!!!!!user bakal langsung keluar dari loop (lanjut belanja atai tidak) karna var lanjutBelanja udah diisi ya atau tidak.
            break; //!!!!!untuk keluar dari loop checkout.
          } else if (saldo == totalHarga) {
            /*************
             * SALDO PAS *
             *************/
            alert(`Uang anda pas, gausah ditungguin.`);
            opsi = 0; //!!!!!untuk keluar dari loop membeli buah/opsi 4.
            //!!!!!user bakal langsung keluar dari loop (lanjut belanja atai tidak) karna var lanjutBelanja udah diisi ya atau tidak.
            break; //!!!!!untuk keluar dari loop checkout.
          }
        }
      }
    }
  }
}

//!!!!!loop text [array], hanya untuk menambah newline pada array / membuat array menjadi list
