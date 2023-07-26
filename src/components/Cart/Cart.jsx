import React, { useContext, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
// import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";
import {
    collection,
    getDocs,
  } from "firebase/firestore";
  import { fireStoreDb } from "../../firebaseConfig";

import "./Cart.scss";

const Cart = () => {
    const { myCart, setShowCart, cartSubTotal } = useContext(Context);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(fireStoreDb, "myCarts"));
    
        const data = [];
        querySnapshot.forEach((doc) => {
          if (doc.name) {
            data.push({
              id: 1234,
              name: doc().name,
              price: doc().price,
              image: doc().image,
            });
          }
        });
        // setData(data);
      };

    // const stripePromise = loadStripe(
    //     process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    // );
    

    const handlePayment = async () => {
        try {
            // const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: myCart,
            });
            await ({
                // sessionId: res.data.stripeSession.id,
                sessionId: res.data.id,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="cart-panel">
            <div
                className="opac-layer"
                onClick={() => setShowCart(false)}
            ></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowCart(false)}
                    >
                        <MdClose className="close-btn" />
                        <span className="text">close</span>
                    </span>
                </div>

                {!myCart.length && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={() => {}}>
                            RETURN TO SHOP
                        </button>
                    </div>
                )}

                {/* {!!cartItems.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">
                                    &#8377;{cartSubTotal}
                                </span>
                            </div>
                            <div className="button">
                                <button
                                    className="checkout-cta"
                                    onClick={handlePayment}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )} */}

                {!!myCart.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">
                                    &#8377;{cartSubTotal}
                                </span>
                            </div>
                            <div className="button">
                                <button
                                    className="checkout-cta"
                                    onClick={handlePayment}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {/* {myCarts} */}

            </div>
        </div>
    );
};

export default Cart;