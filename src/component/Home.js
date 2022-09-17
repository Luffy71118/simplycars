import React from "react";
import Carousel from "./Carousel";
import Carditem from "./Carditem";
export default function Home() {
  return (
    <>
      <Carousel />

      <div className="contain">LUXURY / TOP RATED CARS </div>
      <div>
        <p>
          At Simply Cars, our experts can help you out to select and arrange
          among all the top rated cars brand.{" "}
        </p>
        <p>
          We have a dedicated team who can look after your needs and can help
          you out to select the perfect car as per your needs.{" "}
        </p>
        <p>
          We also offer best in the market discount depending on the
          availability and stock.{" "}
        </p>
        <p>You can also consider us for pre owned car sale/purchase.</p>
      </div>
      <div className="cardbox">
        <Carditem />
      </div>
      {/* <div className="contain">POPULAR BRANDS </div> */}
      {/* <div className="cardbox">
        <Company />
      </div>
       */}
    </>
  );
}
