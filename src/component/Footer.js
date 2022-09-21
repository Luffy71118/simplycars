import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
    <>
      <footer>
        <div>
          <Link to={"/home"}>
            <img src="./logo/instagram.png" alt="instagram logo" />
          </Link>
          <Link to={"/home"}>
            <img src="./logo/facebook.png" alt="facebook logo" />
          </Link>
          <Link to={"/home"}>
            <img src="./logo/twitter.png" alt="twitter logo" />
          </Link>
          <Link to={"/home"}>
            <img src="./logo/youtube.png" alt="youtube logo" />
          </Link>
        </div>
        <div>
          <p>Copyright © Simplycars 2015-2023</p>
          <p>All rights reserved</p>{" "}
        </div>
        <div>
          <Mailto
            email="official.simplycars@gmail.com"
            subject="Car Details"
            body={`Name=                
            contact number=           
            car name=                 `}
          >
            <p>official.simplycars@gmail.com</p>
          </Mailto>
          <a href="tel:8700458238">
            <p>Contact us<img src="./logo/contact.png" alt="contact logo "/></p>
          </a>
        </div>
      </footer>
    </>
  );
}
