import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SpinnerComponent from "./Spinner";

function Card() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wishList, setWishList] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });
  const [cartList, setCartList] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    // Fetch products data
    fetch("https://fakestoreapi.com/products/")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("Error fetching products");
      })
      .then((data) => {
        setProducts(data);
        const dataCat = [];
        for (let i = 0; i < data.length; i++) {
          if (!dataCat.includes(data[i].category)) {
            dataCat.push(data[i].category);
          }
        }
        setCategories(dataCat);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishList(storedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const addToWishList = (product) => {
    if (wishList.some((item) => item.id === product.id)) {
      setWishList((prevWishList) =>
        prevWishList.filter((item) => item.id !== product.id)
      );
    } else {
      setWishList((prevWishList) => [...prevWishList, product]);
    }
  };

  const addToCartList = (product) => {
    if (cartList.some((item) => item.id === product.id)) {
      setCartList((prevCartList) =>
        prevCartList.filter((item) => item.id !== product.id)
      );
    } else {
      setCartList((prevCartList) => [...prevCartList, product]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <>
      <h1
        className="display-5 fw-bolder mb-2"
        style={{ textAlign: "center", margin: "78px" }}
      >
        Products
      </h1>
      <div className="dropdown" style={{ margin: "0% 5%", padding: "0% 5%" }}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={() => filterProductsByCategory(null)}
            >
              All
            </a>
          </li>
          {Array.from(categories).map((item, index) => (
            <li key={index}>
              <a
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => filterProductsByCategory(item)}
              >
                {capitalize(item)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-container">
        {loading ? (
          <SpinnerComponent />
        ) : Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="card" key={product.id}>
              <img
                className="card-img-top"
                src={product.image}
                alt="img"
                style={{ alignSelf: "center" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 10)}</h5>
                <p className="card-text">
                  {product.description.substring(0, 100) + "..."}
                </p>
                <p>{product.price} euro</p>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {wishList.some((item) => item.id === product.id) ? (
                    <IconButton
                      sx={{ p: 0, color: "#9c27b0" }}
                      onClick={() => addToWishList(product)}
                    >
                      <FavoriteIcon />
                      <Typography variant="body2">Wish list</Typography>
                    </IconButton>
                  ) : (
                    <IconButton
                      sx={{ p: 0 }}
                      onClick={() => addToWishList(product)}
                    >
                      <FavoriteBorderIcon />
                      <Typography variant="body2"> Wish list</Typography>
                    </IconButton>
                  )}

                  {cartList.some((item) => item.id === product.id) ? (
                    <IconButton
                      sx={{ p: 0, color: "#FF9800" }}
                      onClick={() => addToCartList(product)}
                    >
                      <FavoriteIcon />
                      <Typography variant="body2">Add to cart</Typography>
                    </IconButton>
                  ) : (
                    <IconButton
                      sx={{ p: 0 }}
                      onClick={() => addToCartList(product)}
                    >
                      <FavoriteBorderIcon />
                      <Typography variant="body2"> Add to cart</Typography>
                    </IconButton>
                  )}
                  {/* <IconButton
                    sx={{
                      p: 0,
                      color: cartList.some((item) => item.id === product.id)
                        ? "#FF9800"
                        : "inherit",
                    }}
                    onClick={() => addToCartList(product)}
                  >
                    <ShoppingCartIcon />
                    <Typography variant="body2"> Add to cart</Typography>
                  </IconButton> */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No products found for the selected category.</div>
        )}
      </div>
    </>
  );
}

export default Card;
