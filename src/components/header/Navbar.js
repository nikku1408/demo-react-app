import { React } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </>
  );
};
export default Navbar;
