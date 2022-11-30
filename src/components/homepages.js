import React from 'react';
import "../assets/css/font-awesome/css/all.css";
import "../assets/css/bootstrap.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap.min.css.map";
import "../assets/css/main.css";
import "../assets/css/print.css";
import "../assets/css/site.css";
import Navigation from './Navigation';
import { Body } from './Body';
import { Footer } from './Footer';


const Homepages = () => {
  return (
    <div className='container'>
        <Navigation />
        <Body />
        <Footer />
    </div>
  )
}

export default Homepages;
