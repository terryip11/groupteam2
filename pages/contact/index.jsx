// pages/contact.js

import Head from 'next/head';
import "../../app/globals.css";
import React from 'react';
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact page for our company" />
      </Head>

      <Nav />
      <Sidebar />
      <div style={{ margin: '30px', fontSize: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Contact Us</h1>
      </div>
      <div className="contactInfo">
        <p>Address: 81 Austin Road, Tsim Sha Tsui</p>
        <p>E-mail: aeltd@gmail.com</p>
        <p>Phone: 852 2730 5653</p>
        <p>Fax: 852 2736 0612</p>

      </div>

      <h1 style={{ margin: '30px', fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Or leave us a message below
      </h1>
      <div className="contactForm">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}