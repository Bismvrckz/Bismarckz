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

/*
  <tr> 
     <td>1652777173833</td>
     <td>Celana Jin</td>
    <td><input onclick=fnDeleteById(1652777173833) ><td>
    <td><input onclick=fnEdit(1652777173833) ><td>
  <tr>
  <tr>
    <td>1652777222715<td>
    <td>Hoodie Jin</td>
    <td><input onclick=fnDeleteById(1652777222715) ><td>
  <tr>
*/

const fnEdit = (productId) => {
  fnRenderList(products, productId);
};
const fnCancel = () => {
  fnRenderList(products);
};

const fnRenderList = (arr, productId) => {
  const listProduct = arr.map((product) => {
    if (product.id == productId) {
      return `
      <tr>
         <td>${product.id}</td>
         <td><input type="text" value="${product.name}"/></td>
         <td><input type="text" value="${product.price}"/></td>
         <td><input type="text" value="${product.stock}"/></td>
         <td><input type="button" value="Save" onclick="fnSave()"></td>
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

fnRenderList(products);
