import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(propes) {
  return (
    <>
      <nav>
        <div className="nav-item "> {propes.title} </div>
        <div>
          <ul className="nav justify-content-center white">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/home"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/cars"}>
                Cars
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/service"}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                about
              </Link>
            </li>
          </ul>{" "}
        </div>
      </nav>
    </>
  );
}
