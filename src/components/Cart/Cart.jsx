import React, { useContext, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import { makePaymentRequest } from "../../utils/api";
import { collection, getDocs } from "firebase/firestore";
import { fireStoreDb } from "../../firebaseConfig";

import "./Cart.scss";

const Cart = () => {
  const { myCart, setShowCart, cartSubTotal } = useContext(Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(fireStoreDb, "addproducts"));

    const data = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().name) {
        data.push({
          id: doc.id,
          name: doc.data().productname,
          price: doc.data().Price,
          image: doc.data().Image,
        });
      }
    });
    setData(data);
  };

  const handlePayment = async () => {
    try {
      const res = await makePaymentRequest.post("/api/orders", {
        products: myCart,
      });
      await {
        sessionId: res.data.id,
      };
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose className="close-btn" />
            <span className="text">close</span>
          </span>
        </div>

        {!myCart && (
          <div className="empty-cart">
            {data.map((item) => (
              <div className="flex">
                <img
                  src={item.image}
                  alt=""
                  srcset=""
                  height={200}
                  width={100}
                />
                <p>Name : {item.name}</p>
                <p>Price : {item.price}</p>
              </div>
            ))}
            <span>No products in the cart.</span>
            <button className="return-cta" onClick={() => {}}>
              RETURN TO SHOP
            </button>
          </div>
        )}

        {!!CartItem && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handlePayment}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}

        {!!myCart && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handlePayment}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
