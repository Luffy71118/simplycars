import React from "react";
import cars from "./modules/Cardata";
export default function Cars() {
  return (
    <>
      <div className="contain">LUXURY / TOP RATED CARS</div>
      <div className="cardbox">
        {cars.map((e) => (
          <div className="card cddark">
            <img src={e.url} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                {e.carname}
                <br/> {e.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
