import React, { useState } from "react";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <section id="work">
      <div className="row section-head">


        <div className="twelve columns">
          <p className="lead">Gusto mo bang malaman ang mga techniques kung paano ka ma HIRE ng mga foreign employers?</p>
        </div>
      </div>

      <div className="row" >
        <div>
          <button onClick={() => {
            window.open("https://www.spearheaddigitals.com/sales-page");



          }} type="button" className="submit">
            Yes I want to work from home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
