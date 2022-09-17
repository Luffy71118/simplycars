import React from "react";

export default function Reviews() {
  return (
    <>
      <div
        id="testimonial4"
        className="carousel slide "
        data-bs-ride="carousel"
        data-pause="hover"
      >
        <div className="carousel-inner slide_box" role="listbox">
          <div className="carousel-item active">
            <p>
              Always available to answer any questions. Very knowledgeable about
              the services they provide. I would highly recommend working with
              Jon to purchase your next vehicle.{" "}
            </p>
            <h4>Ayush</h4>
          </div>
          <div className="carousel-item">
            <p>
              My experience purchasing a car from "Simply Cars" was excellent. I
              worked with Naveen through the entire purchase. I was a little
              skeptical at first But Would recommend to anyone!.{" "}
            </p>
            <h4>Ankur</h4>
          </div>
          <div className="carousel-item">
            <p>
              Simply Cars made the car purchase easy by offering a complete walk
              around of the car and pointing out blemishes to make sure there
              were no surprises once I received the car.{" "}
            </p>
            <h4>Pooja</h4>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonial4"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonial4"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
