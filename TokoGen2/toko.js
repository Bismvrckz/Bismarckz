class Barang {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}
var products = [
  { id: 1652777173833, name: "Celana Jin", price: 120000, stock: 30 },
  { id: 1652777222715, name: "Hoodie Jin", price: 150000, stock: 20 },
  { id: 1652777231256, name: "Tas Jin", price: 170000, stock: 10 },
];

const fnRenderList = () => {
  const listProduct = products.map((product) => {
    return `
        <tr>
           <td>${product.id}</td>
           <td>${product.name}</td>
           <td>${product.price}</td>
           <td>${product.stock}</td>
        </tr>
        `;
  });

  document.getElementById("tableBody").innerHTML = listProduct.join("");
};

fnRenderList();

const tambahBarang = () => {
  const time = new Date();
  let idBaru = time.getTime();
  let namaBarangBaru = document.getElementById("name").value;
  let hargaBarangBaru = parseInt(document.getElementById("price").value);
  let stokBarangBaru = parseInt(document.getElementById("stock").value);
  products.push(
    new Barang(idBaru, namaBarangBaru, hargaBarangBaru, stokBarangBaru)
  );
  console.log(products);
  console.log(Barang);
  fnRenderList();
  document.getElementById("form").reset();
};
