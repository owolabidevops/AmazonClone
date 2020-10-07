import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
        alt=""
      />

      {/* product id .title ,price, image    */}

      <div className="home_row">
        <Product
          id="12321341"
          title="ELECTRONICS"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
        <Product
          id="12321341"
          title="CREST"
          price={60.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51+8z0H7zGL._AC_SY200_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="12321341"
          title="WIFI RANGE EXTENDER"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41ffko0T3kL._AC_SY200_.jpg"
        />
        <Product
          id="12321341"
          title="AVALON"
          price={99.9}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51-wsV9iCqL._AC_SY200_.jpg"
        />
        <Product
          id="12321341"
          title="CeraVe Moisturizing Cream"
          price={100.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="VICTOROLA"
          price={300.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41yavwjp-8L._AC_SY200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
