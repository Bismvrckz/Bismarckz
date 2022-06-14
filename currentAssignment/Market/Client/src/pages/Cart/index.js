import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import axiosInstance from "../../services/axios";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const { id, username } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const resGetCartProducts = await axiosInstance.get("/cart", {
        params: { userId: `${id}` },
      });
      setCartProducts(resGetCartProducts.data);
    } catch (error) {
      alert("Terjadi kesalahan. Api udah dinyalain ?");
      console.log({ error });
    }
  };

  const renderProducts = () => {
    return cartProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  if (!username) return <Navigate to="/" replace />;
  if (!cartProducts.length)
    return (
      <div className="container mt-5">
        <Alert severity="warning">
          <AlertTitle>Wahai!!</AlertTitle>
          Belum ada produk di cart — <strong>pilih dulu sana!</strong>
        </Alert>
      </div>
    );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-wrap ">{renderProducts()}</div>
      </div>
    </div>
  );
}
