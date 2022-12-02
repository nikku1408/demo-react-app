import { React } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: "pink",
            height: "50px",
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "10px",
          }}
        >
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
