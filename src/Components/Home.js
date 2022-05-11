import React from "react";
import Banner from "./Banner";
import Drinks from "./Drinks";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Drinks />
      <Footer />
    </div>
  );
}

export default Home;
