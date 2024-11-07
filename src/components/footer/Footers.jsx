import React from 'react'
import { Link } from 'react-router-dom'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footers() {
  return (
    <>


      <footer>
        <div className="content">
          <div className="top ">

            <img src="https://res.cloudinary.com/dwp3vqqoj/image/upload/v1729051767/dg9ejty46h1hglsnsccf.png" width={120} height={98} alt='Company logo' className='company mlogo ' />
            {/* <p className='tagline text-white'>Your perfect stay is just a click away. Book now!</p> */}

            <i className="fa fa-envelope  text-white  ms-0">

              &ensp;  <a className='text-white' href="mailto:Staymenu.info@gmail.com" target="_blank">Staymenu.info@gmail.com</a> <br />
            </i>
            <i className="fa fa-phone-alt text-white m-3 ms-0">
              &ensp;<a className='text-white' href="tel:+91 9462979594">+91 9462979594</a>

            </i>




            <div className="media-icons ms-5 set-icon">
              <a href="https://www.facebook.com/share/awQaug6PfNs1drif/?mibextid=qi2Omg" target="_blank"><i className="fab fa-facebook-f"></i></a>
              <a className='' href="https://x.com/stay_menu" target="_blank"><img className='xicon mb-1' src='images/ssl.png' width={43} /></a>
              <a href="https://www.instagram.com/staymenu_?igsh=MW1lc3dpZnJnYTI0dg==" target="_blank"><i className="fab fa-instagram" ></i></a>
              <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" target="_blank"><i className="fab fa-youtube"></i></a>
           
            </div>
          </div>

          <div className="container-fluid">
            <div className="row link-boxes">
              <div className="col-md-3">
                <div className="">  <ul className="box input-box">
                  <li className="link_name ">Subscribe</li>
                  <li><input type="text" className="alty" placeholder="Enter your email" /></li>
                  <li><input type="button" value="Subscribe" /></li>
                </ul></div>
                <img src="https://res.cloudinary.com/dwp3vqqoj/image/upload/v1729049502/guo6nzlliuyy4bikbzn3.png" alt='Company logo' width={30} height={30} />&emsp;

                <a className='text-white' href="https://maps.app.goo.gl/aR4NQiYMEFvvWHsB8" target="_blank">
                  52 Staymenu Village Turkadi Th.Hindoli District Bundi Rajasthan
                  323024
                </a><br />

              </div>
              <div className="col-md-3"><ul className="box">
                <li className="link_name">Services</li>
                <li><a href="#">Hotel Booking </a></li>
                <li><a href="#">Hostel Booking </a></li>
                <li><a href="#">Guest House </a></li>
                <li><a href="#">Apartments</a> </li>
                <li><a href="#">Resorts </a></li>
                <li><a href="#">Villas </a> </li>
              </ul></div>
              <div className="col-md-3"> <ul className="box">
                <li className="link_name">Options </li>
                
                <li> <Link className="footeritem text-light" to="/Listproperty">List Property</Link></li>
                <li> <Link className="footeritem text-light" to="/contact">Contact As </Link></li>
                <li> <Link className="footeritem text-light" to="/about">About</Link></li>
                <li><a href="#">Refer & Earn</a></li>

              </ul></div>
              <div className="col-md-3"> <ul className="box">
                <li className="link_name">Account</li>

                <li> <Link className="footeritem text-light" to="/profile">Profile </Link>
                </li>
                <li><Link to="/myAllbooking">My Booking</Link></li>
                <li><a href="#">Prefrences</a></li>
                <li> <Link className="footeritem text-light" to="/"> LogOut</Link></li>
              </ul>
              </div>  

            </div>
          </div>

        </div>
        <hr className='hrline' />
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">Copyright © 2024 <a href="#">Staymenu</a>All rights reserved</span>
            <span className="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer >

    </>
  )
}

export default Footers