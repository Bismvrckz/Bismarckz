import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../services/axios";
import { useSelector } from "react-redux";

function DetailProduct() {
  // params.productId --> gunakan untuk ambil data
  const params = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);

  const fetchProduct = async () => {
    try {
      const res = await axiosInstance.get(`/products/${params.productId}`);
      setProduct(res.data);
    } catch (error) {
      alert("Terjadi kesalahan");
      console.log(error);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const { id, productImage, productName, price, description } = product;

  const userId = useSelector((state) => state.auth).id;

  async function addToCart() {
    try {
      await axiosInstance.post("/cart", {
        productId: id,
        quantity,
        productName,
        price,
        userId,
        productImage,
      });
      alert(`Bisa`);
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6">
          <img style={{ width: "100%" }} src={productImage} alt="tulisan" />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
          <h4>{productName}</h4>
          <h5>Rp {price?.toLocaleString("id")}</h5>
          <p>{description}</p>
          <div className="d-flex flex-row align-items-center">
            <button
              disabled={quantity == 0}
              className="btn btn-primary"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <strong className="text-center mx-4">{quantity}</strong>
            <button className="btn btn-primary" onClick={increaseQuantity}>
              +
            </button>
          </div>
          <button
            disabled={quantity == 0}
            className="btn btn-success mt-3"
            onClick={addToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
