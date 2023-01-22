import React from "react";
import Footer from "../../Components/Store/Footer/Footer";
import Header from "../../Components/Store/Header/Header";
import AboutNavbar from "../About/AboutNavbar";
import ContactUsForm from "./ContactUsForm";

function ContactUs() {
  // console.log("contact");
  return (
    <div>
      <AboutNavbar></AboutNavbar>
      <Header></Header>
      <br />
      <br />
      <ContactUsForm></ContactUsForm>
      <br />
      <Footer></Footer>
    </div>
  );
}

export default ContactUs;
