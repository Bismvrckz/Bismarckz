class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

let products = [
  { id: 1652777173833, name: "Celana Jin", price: 120000, stock: 30 },
  { id: 1652777222715, name: "Hoodie Jin", price: 150000, stock: 20 },
  { id: 1652777231256, name: "Tas Jin", price: 170000, stock: 10 },
];

let cart = [];

const fnRenderCart = () => {
  const listProduct = cart.map((product) => {
    return `
      <tr>
         <td>${product.id}</td>
         <td>${product.name}</td>
         <td>${product.price}</td>
         <td>${product.quantity}</td>
      </tr>
      `;
  });

  document.getElementById("tableCart").innerHTML = listProduct.join("");
};

const fnAddToCart = (productId) => {
  const product = products.find((product) => product.id == productId);

  const { id, name, price } = product;
  const cartObj = { id, name, price, quantity: 1 };

  cart.push(cartObj);

  fnRenderCart();
};

const fnSave = (productId) => {
  const name = document.getElementById("editName").value;
  const price = document.getElementById("editPrice").value;
  const stock = document.getElementById("editStock").value;
  const product = { id: productId, name, price, stock };

  const foundIndex = products.findIndex((product) => {
    return product.id == productId;
  });
  products[foundIndex] = product;

  fnRenderList(products);
};

const fnFilterByPrice = () => {
  const min = parseInt(document.getElementById("filterPriceMinimum").value);
  const max = parseInt(document.getElementById("filterPriceMaximum").value);

  const resultFilterHarga = products.filter((product) => {
    if (min <= product.price && product.price <= max) {
      return true;
    }
  });
  fnRenderList(resultFilterHarga);
  console.log("jalan");
};

const fnEdit = (productId) => {
  fnRenderList(products, productId);
};
const fnRenderList = (arr, productId) => {
  const listProduct = arr.map((product) => {
    if (product.id == productId) {
      return `
      <tr>
         <td>${product.id}</td>
         <td><input type="text" id="editName" value="${product.name}"/></td>
         <td><input type="text" id="editPrice" value="${product.price}"/></td>
         <td><input type="text" id="editStock" value="${product.stock}"/></td>
         <td><input type="button" value="Save" onclick="fnSave(${product.id})"></td>
         <td><input type="button" value="Cancel" onclick="fnCancel()"></td>
      </tr>
      `;
    }
    return `
      <tr>
         <td>${product.id}</td>
         <td>${product.name}</td>
         <td>${product.price}</td>
         <td>${product.stock}</td>
         <td><input type="button" value="Add" onclick="fnAddToCart(${product.id})"></td>
         <td><input type="button" value="Delete" onclick="fnDeleteById(${product.id})"></td>
         <td><input type="button" value="Edit" onclick="fnEdit(${product.id})"></td>
      </tr>
      `;
  });

  document.getElementById("tableBody").innerHTML = listProduct.join("");
};

const fnInputData = () => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;
  const time = new Date();
  const id = time.getTime();
  const product = { id, name, price, stock };
  products.push(product);
  document.getElementById("form").reset();
  fnRenderList(products);
};

const fnFilterByName = () => {
  const keyword = document.getElementById("filterName").value;

  const resultFilter = products.filter((product) => {
    const name = product.name.toLowerCase();
    const lowerKeyword = keyword.toLowerCase();
    return name.includes(lowerKeyword);
  });
  fnRenderList(resultFilter);
};

const fnDeleteById = (productId) => {
  products = products.filter((product) => product.id != productId);
  fnRenderList(products);
};

const fnCancel = () => {
  fnRenderList(products);
};

const fnCalculateCart = () => {
  let hargaBersih = 0;
  const listProduct = cart.map((product) => {
    hargaBersih += product.price;
    return `
      <tr>
         <td>${product.id}</td>
         <td>${product.name}</td>
         <td>${product.price}</td>
         <td>${product.quantity}</td>
      </tr>
      `;
  });
  let ppn = (hargaBersih * 10) / 100;
  document.getElementById("tableSummary").innerHTML = listProduct.join("");
  document.getElementById("subTotal").innerHTML = `Sub Total : ${hargaBersih}`;
  document.getElementById("ppn").innerHTML = `PPN : ${ppn}`;
  document.getElementById("hargaBersih").innerHTML = `Total : ${
    hargaBersih + ppn
  }`;
};

fnRenderList(products);
fnRenderCart();
