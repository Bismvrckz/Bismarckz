import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import axiosInstance from "../../services/axios";

function Home() {
  const [products, setProducts] = useState([]);

  const [defaultProducts, setDefaultProducts] = useState([]);

  const [current, setCurrent] = useState({
    keyword: "",
    category: "",
    dummy: "",
  });

  // let [render, setRender]

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const resGetProducts = await axiosInstance.get("/products");
      setProducts(resGetProducts.data);
      setDefaultProducts(resGetProducts.data);
    } catch (error) {
      alert("Terjadi kesalahan");
      console.log({ error });
    }
  };

  const renderProducts = () => {
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  const handleChange = (event) => {
    setCurrent({ ...current, [event.target.name]: event.target.value });
  };
  const btnSearchHandler = () => {
    const { keyword, category } = current;
    let targetKeyword = keyword.toLowerCase();
    const filteredProducts = defaultProducts.filter((product) => {
      let currentProduct = product.productName.toLowerCase();
      if (!keyword && !category) {
        return true;
      } else if (!keyword) {
        return product.category == category;
      } else if (!category) {
        return currentProduct.includes(targetKeyword);
      } else {
        return (
          currentProduct.includes(targetKeyword) && product.category == category
        );
      }
    });
    setProducts(filteredProducts);
  };
  const selectSortHandler = ({ target }) => {
    let sortedProducts = [...products];
    if (target.value == "az") {
      sortedProducts.sort((prevProduct, currProduct) => {
        if (prevProduct.productName > currProduct.productName) {
          return 1;
        } else if (prevProduct.productName < currProduct.productName) {
          return -1;
        } else if (prevProduct.productName == currProduct.productName) {
          return 0;
        }
      });
    } else if (target.value == "za") {
      sortedProducts.sort((prevProduct, currProduct) => {
        if (prevProduct.productName > currProduct.productName) {
          return -1;
        } else if (prevProduct.productName < currProduct.productName) {
          return 1;
        } else if (prevProduct.productName == currProduct.productName) {
          return 0;
        }
      });
    } else if (target.value == "highPrice") {
      sortedProducts.sort((prevProduct, currProduct) => {
        if (prevProduct.price > currProduct.price) {
          return -1;
        } else if (prevProduct.price < currProduct.price) {
          return 1;
        } else if (prevProduct.price == currProduct.price) {
          return 0;
        }
      });
    } else if (target.value == "lowPrice") {
      sortedProducts.sort((prevProduct, currProduct) => {
        if (prevProduct.price > currProduct.price) {
          return 1;
        } else if (prevProduct.price < currProduct.price) {
          return -1;
        } else if (prevProduct.price == currProduct.price) {
          return 0;
        }
      });
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          {/* Filter */}
          <div className="card">
            <div className="card-header">
              <strong>Filter products</strong>
            </div>
            <div className="card-body">
              <label>Product Name</label>
              <input
                name="keyword"
                type="text"
                className="form-control mb-3"
                onChange={handleChange}
              />
              <label>Product Category</label>
              <select
                name="category"
                className="form-control"
                onChange={handleChange}
              >
                <option value="">All Items</option>
                <option value="kaos">Kaos</option>
                <option value="celana">Celana</option>
                <option value="aksesoris">Aksesoris</option>
              </select>
              <button
                onClick={btnSearchHandler}
                className="btn btn-outline-primary mt-3 d-block w-100"
              >
                Search
              </button>
            </div>
          </div>

          {/* Sort */}
          <div className="card mt-4">
            <div className="card-header">
              <strong>Sort Products</strong>
            </div>
            <div className="card-body">
              <label className="mb-2">Sort by</label>
              <select
                name="sortBy"
                className="form-control"
                onChange={selectSortHandler}
              >
                <option value="">Sort by</option>
                <option value="lowPrice">Lowest Price</option>
                <option value="highPrice">Highest Price</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-9 d-flex flex-wrap ">{renderProducts()}</div>
      </div>
    </div>
  );
}

export default Home;
