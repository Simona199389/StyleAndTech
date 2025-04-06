import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const [cartList, setCartList] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart.map(item => ({ ...item, quantity: item.quantity || 1 }));
  });

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartList((prevCartList) => {
      const updatedCart = prevCartList.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleRemoveItem = (productId) => {
    setCartList((prevCartList) => {
      const updatedCart = prevCartList.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return cartList
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <h1 className="display-5 fw-bolder mb-2" style={{ textAlign: "center", margin: "48px" }}>
        Cart
      </h1>
      <div className="card-container" style={{display: 'flex', justifyContent: 'center'}}>
        {Array.isArray(cartList) && cartList.length > 0 ? (
          cartList.map((item) => (
            <div className="card" key={item.id}>
              <img
                className="card-img-top"
                src={item.image}
                alt="img"
                style={{ alignSelf: "center" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  {item.title.substring(0, 10)}...
                </h5>
                <p style={{ textAlign: "center" }}>{item.price} euro</p>
                

                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                  <IconButton
                    sx={{ p: 0, color: "#9c27b0" }}
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    <AddIcon />
                  </IconButton>

                  <span>{item.quantity}</span>

                  <IconButton
                    sx={{ p: 0, color: "#9c27b0" }}
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>

                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <strong>Total: {(item.price * item.quantity).toFixed(2)} euro</strong>
                </div>

                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <IconButton
                    sx={{ p: 0, color: "#f44336" }}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Your cart is empty.</p>
        )}
      </div>

      {cartList.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>Total for all products: {calculateTotal()} euro</h3>
        </div>
      )}
    </>
  );
}

export default Cart;
