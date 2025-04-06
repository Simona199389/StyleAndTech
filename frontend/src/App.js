import "./App.css";
import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  const [wishList, setWishList] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  const [cartList, setCartList] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [loggedUser, setLoggedUser] = useState(() => {
    return JSON.parse(localStorage.getItem("email")) || "";
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(loggedUser));
  }, [loggedUser]);

  return (
    <BrowserRouter>
      <ResponsiveAppBar loggedUser={loggedUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route
          path="wishlist"
          element={<Wishlist wishList={wishList} setWishList={setWishList} />}
        />
        <Route
          path="cart"
          element={<Cart cartList={cartList} setCartList={setCartList} />}
        />
        <Route
          path="products"
          element={
            <Card 
              wishList={wishList} 
              setWishList={setWishList} 
              cartList={cartList}
              setCartList={setCartList}
            />
          }
        />
        <Route
          path="login"
          element={
            <Login isThereLoggedUser={loggedUser} setThereLoggedUser={setLoggedUser} />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contact />} />
        <Route
          path="register"
          element={<Register setThereLoggedUser={setLoggedUser} />}
        />
      </Routes>
      {/* <Footer description="Your description goes here" title="Ecommerce app" /> */}
    </BrowserRouter>
  );
}

export default App;
