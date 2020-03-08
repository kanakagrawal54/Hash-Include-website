import React from "react";
import './footer.css';
import hackerEarth from './hackerearth.png';
import codeChef from './codechef.png';
import Mozilla from'./mozilla.png';
import interviewBit from './interview.png';
import Microsoft from './microsoft.png';
function Footer() {

  return (
    <div>
    <div className="main">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <meta name="viewport" content="width=device-width, intial-scale=1"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
       <div className="tie-up">
            <div className="tieupheading">
                      <h3>Our Partners / Tie-Ups</h3>
               </div>
              
               <div className="tieupicons">
                
                <div className="images">
                       <img src={Mozilla} width="150px" height="130px"/>
                </div>
                 <div className="images images1">
                      <img src={codeChef} width="150px" height="130px"/>
                </div>
                 <div className="images img2">
                     <img src={hackerEarth} width="150px" height="130px"/>
                 </div>
                 <div className="images">
                       <img src={interviewBit} width="150px" height="130px"/>
                </div>
                 <div className="images">
                       <img src={Microsoft} width="150px" height="130px"/>
                </div>
                
              </div>   
        </div>
               <div className='upper'>

               <div className='footerDiv'>

                  <h2>Visit Our Office</h2>
                  <hr align="left"></hr>
                  <p>23, Sir M. Visvesvaraya Marg,
                    <br/>
                     Vallabh Nagar, Indore 
                     <br/>
                     Madhya Pradesh 452003</p>

                 </div>

                <div className='footerDiv borderr'>

                  <h2>Start a Conversation
                  <hr align="left"/></h2>
                  <i class="glyphicon glyphicon-envelope"></i>
                  <a class="mail-id" style={{fontSize:"18px"}} href="mailto:#0">contactus@includesgsits.tech</a>
                  <br/>
                  <a class="fa fa-phone" style={{fontSize:"18px",color:"black"}} href="tel:+918085052728">+91 8085052728</a>
                  <br/>
                </div>

              
            </div>

            <div className='lower'>
            <div className="copyright">
            <p>&copy; #include SGSITS Indore</p>
            </div>
            <div className="icons">
            <a class="fa fa-facebook fam" style={{fontSize:"30px"}} href="https://www.facebook.com/hashincludesgsits"></a>
            <a class="fa fa-instagram fam" style={{fontSize:"30px"}} href="https://www.instagram.com/include._/"></a>
            <a class="fa fa-linkedin fam" style={{fontSize:"30px"}} href="https://www.linkedin.com/company/include-sgsits/"></a>
            </div>
            </div>

            </div>
</div>
  );

}



export default Footer;
