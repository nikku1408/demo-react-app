import { React } from "react";
import "./Contacts.css";
import Cards from "../cards/Cards";
const ContactUs = (props) => {
  return (
    <>
      <div className="Contacts">
        <Cards
          text="If you would like to join the Hawk Tubley email list, just email
        hawktubley@gmail.com. To contact Hawk Tubley about anything at all,
        email hawktubley@gmail.com or send mail by post to Hawk Tubley P.O. Box
        63773 Philadelphia, PA, 19147"
        />
      </div>
    </>
  );
};
export default ContactUs;
