import React from "react";
import './footer.css';

function Footer() {
  return (
  	<div>
   <div className='upper'>
   <div className='footerDiv'>
      <h2>Address</h2>
      <br></br>
      <p>23 ,Sir M. Visvesvaraya Marg,
         Vallabh Nagar,Indore 
         Madhya Pradesh 452003</p>
     </div>
    <div className='footerDiv'>
      <h2>Contact us 
      </h2>
      <br></br>
      <ul>
         <li>abc</li>
         <li>abc</li>
      </ul>
    </div>
    <div className='footerDiv'>
      <h2>Contact us
      <span></span></h2>
      <br></br>
      <ul>
         <li>abc</li>
         <li>abc</li>
      </ul>
    </div>
    <div className='footerDiv'>
      <h2>Contact us</h2>
      <br></br>
      <ul>
         <li>abc</li>
         <li>abc</li>
      </ul>
    </div>
    </div>
    <div className='lower'>
    <p>&copy; #include SGSITS Indore</p>
    </div>
    </div>
  );
}

export default Footer;