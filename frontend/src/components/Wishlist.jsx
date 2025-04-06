import React, { useState, useEffect } from "react";

function Wishlist() {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishList(storedWishlist);
  }, []);

  return (
    <>
      <h1 className="display-5 fw-bolder mb-2" style={{ textAlign: "center", margin: "48px" }}>
        Wish list
      </h1>
      <div className="card-container">
        {Array.isArray(wishList) && wishList.length > 0 ? (
          wishList.map((item) => (
            <div className="card" key={item.id}>
              <img className="card-img-top" src={item.image} alt="img" style={{ alignSelf: "center" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  {item.title.substring(0, 10)}...
                </h5>
                <p style={{ textAlign: "center" }}>{item.price} euro</p>
              </div>
            </div>
          ))
        ) : (
          <>
            <p style={{ textAlign: "center" }}></p>
            <p style={{ textAlign: "center" }}>Your wishlist is empty.</p>
          </>
        )}
      </div>
    </>
  );
}

export default Wishlist;
