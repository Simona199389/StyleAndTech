import React from "react";

const Home = () => {
  const centeredDivStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "150px",
    alignItems: "center",
    height: "70vh",
    textAlign: "center",
  };

  return (
    <>
    <h1 style={{textAlign:"center", marginTop: "20px"}}>Welcome to My ECommerce App</h1>
    <div style={centeredDivStyle}>
      App Hello and welcome to my e-commerce
      application! I am thrilled to present this project, which I developed to
      demonstrate my skills and passion for creating seamless online shopping
      experiences. Below, you'll find an overview of the key features and
      technologies I used to bring this app to life.
    </div>
    </>
  );
};

export default Home;
