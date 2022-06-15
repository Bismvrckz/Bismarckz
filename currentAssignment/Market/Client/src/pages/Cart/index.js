import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axiosInstance from "../../services/axios";

function Cart() {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(0);
  const [checkoutCred, setCheckoutCred] = useState({
    recipientName: "",
    payment: "",
    address: "",
  });
  const [priceState, setPriceState] = useState({
    subTotal: 0,
    tax: 0,
    total: 0,
  });
  const userId = useSelector((state) => state.auth.id);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const { data } = await axiosInstance.get("/cart", {
        params: { userId },
      });

      const subTotal = data.reduce((a, b) => a + b.quantity * b.price, 0);
      const tax = subTotal * 0.05;
      const total = subTotal + tax;

      setCart(data);
      setPriceState({ subTotal, tax, total });
    } catch (error) {
      alert("Terjadi kesalahan saat mengambil cart");
    }
  };

  const onClickDelete = async (id) => {
    try {
      await axiosInstance.delete(`/cart/${id}`);
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  const renderCart = () => {
    return cart.map((c) => {
      const { id, productImage, productName, price, quantity } = c;
      return (
        <tr key={id}>
          <td className="align-middle">{productName}</td>
          <td className="align-middle">{price}</td>
          <td className="align-middle">
            <img src={productImage} alt="" style={{ height: "125px" }} />
          </td>
          <td className="align-middle">{quantity}</td>
          <td className="align-middle">{quantity * price}</td>
          <td className="align-middle">
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                onClickDelete(id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  const onPaymentClick = async () => {
    try {
      const { data } = await axiosInstance.get("/cart", {
        params: { userId },
      });

      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const idMaker = new Date();

      const { recipientName, payment, address } = checkoutCred;

      if (!recipientName || !address || !payment) {
        return alert(`Tolong isi dengan lengkap`);
      }

      if (!(payment >= priceState.total)) {
        return alert(`Uang anda kurang!`);
      }

      let currentTransaction = {
        userId,
        address,
        totalPayment: payment,
        recipientName,
        transactionDate: {
          date: idMaker.getDate(),
          month: idMaker.getMonth(),
          years: idMaker.getFullYear(),
          hours: idMaker.getHours(),
          minutes: idMaker.getMinutes(),
          monthWord: month[idMaker.getMonth()],
        },
        transactionItems: data,
        invoiceNumber: `INV/${idMaker.getFullYear()}${idMaker.getMonth()}${idMaker.getDate()}`,
      };

      console.log(currentTransaction);

      await axiosInstance.post("/transactions", currentTransaction);
      alert(`Berhasil`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    setCheckoutCred({
      ...checkoutCred,
      [event.target.name]: event.target.value,
    });
  };

  const onCheckoutClick = () => {
    setCheckout(1);
  };

  if (!userId) return <Navigate to="/" replace />;

  return (
    <div className="p-5 text-center">
      <h1>Cart</h1>
      <div className="row mt-5">
        <div className=" col-9 text-center">
          <table className="table">
            <thead>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </thead>
            <tbody>{renderCart()}</tbody>
            <tfoot className="bg-light">
              <tr>
                <td colSpan={6}>
                  <button
                    className="btn btn-outline-success"
                    onClick={onCheckoutClick}
                  >
                    Checkout
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {checkout ? (
          <div className="col-3">
            <div className="card text-left">
              <div className="card-header">
                <strong>Order Summary</strong>
              </div>
              <div className="card-body">
                <div className="d-flex my-2 flex-row justify-content-between align-items-center">
                  <span className="font-weight-bold">Subtotal Price</span>
                  <span>Rp {priceState.subTotal}</span>
                </div>
                <div className="d-flex my-2 flex-row justify-content-between align-items-center">
                  <span className="font-weight-bold">Tax Fee (5%)</span>
                  <span>Rp {priceState.tax}</span>
                </div>
                <div className="d-flex my-2 flex-row justify-content-between align-items-center">
                  <span className="font-weight-bold">Total Price</span>
                  <span>Rp {priceState.total}</span>
                </div>
              </div>
              <div className="card-body border-top">
                <label htmlFor="recipientName">Recipient Name</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="recipientName"
                  onChange={handleChange}
                />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  onChange={handleChange}
                />
              </div>
              <div className="card-footer">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <input
                    name="payment"
                    className="form-control mx-1"
                    type="number"
                    onChange={handleChange}
                  />
                  <button
                    onClick={onPaymentClick}
                    className="btn btn-outline-success mx-1"
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Cart;
