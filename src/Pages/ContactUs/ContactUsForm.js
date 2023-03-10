import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import classes from "./ContactUs.module.css";

function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const history = useHistory();
  const nameHandler = (event) => {
    setName(event.target.value.toString());
  };
  const emailHandler = (event) => {
    setEmail(event.target.value.toString());
  };
  const phoneNumberhandler = (event) => {
    setPhoneNumber(event.target.value.toString());
  };
  const contact = () => {
    alert("Thank you :)");
    // history.replace("/about");
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    const obj = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    };

    try {
      const response = await fetch(
        "https://ecommerce-267de-default-rtdb.firebaseio.com//userData.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      // const data = await response.json();
      // console.log(data);
      // fetchMoviesHandler();
    } catch (error) {
      console.log(error);
    }
    setName("");
    setEmail("");
    setPhoneNumber("");
  };
  return (
    <div>
      <Card className={classes.card}>
        <br />
        <form className={classes.form} onSubmit={submitHandler}>
          <div>
            <label htmlFor="name" className={classes.lab}>
              Name
            </label>
            <br />
            <input type="text" size="40" value={name} onChange={nameHandler} />
          </div>
          <div>
            <label className={classes.lab} htmlFor="emailId">
              Email
            </label>
            <br />
            <input
              type="email"
              size="40"
              value={email}
              onChange={emailHandler}
            />
          </div>
          <div>
            <label className={classes.lab} htmlFor="phoneNumber">
              Phone Number
            </label>
            <br />
            <input
              type="text"
              size="40"
              value={phoneNumber}
              onChange={phoneNumberhandler}
            />
          </div>
          <button className={classes.button} onClick={contact}>
            Contact Us
          </button>
        </form>
      </Card>
    </div>
  );
}

export default ContactUsForm;
