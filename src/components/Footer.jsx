import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <div >
      <div className="footer-first mt-5">
        <div className="heading d-flex align-items-center jsutify-content-center ms-5">
          <h5 className="mt-4">MOVIE MANIA</h5>
        </div>

        <div className="d-flex">

          <div className="m-5">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicings iste itaque adipisci nemo. Reiciendis porro recusandae esse qui quasi numquam expedita necessitatibus magnam explicabo?</p>
          </div>
          <div className="m-5">
            <h6>contact with us </h6>
            <div className="icons d-flex  mt-3">
              <a href="">
                <i
                  class="fa-brands fa-square-facebook"
                  style={{ fontSize: "35px" }}
                ></i>
              </a>
              <a href="">
                <i
                  class="fa-brands fa-square-x-twitter ms-2"
                  style={{ fontSize: "35px" }}
                ></i>
              </a>
              <a href="">
                <i
                  class="fa-brands fa-linkedin ms-2 "
                  style={{ fontSize: "35px" }}
                ></i>
              </a>
              <a href="">
                <i
                  class="fa-brands fa-square-instagram ms-2"
                  style={{ fontSize: "35px" }}
                ></i>
              </a>
            </div>
          </div>

          <div className="footerlinks m-5">
            <h6 className="text-center">links</h6>
            <div className="d-flex mt-3 ">
              <Link to='/' style={{textDecoration:'none',color:'black'}} >Landing </Link>
              <Link to='/home' className="ms-2 footlink" style={{textDecoration:'none',color:'black'}}>Home</Link>
              <Link to='/trailer' className="ms-2" style={{textDecoration:'none',color:'black'}}>trailer</Link>
              <Link to='/music' className="ms-2" style={{textDecoration:'none',color:'black'}}>music</Link>
              <Link to='/review' className="ms-2" style={{textDecoration:'none',color:'black'}}>Reviews</Link>
              
            </div>
          </div>

          <div className="m-5 ">
            <input type="text" placeholder="enter your email"  className="rounded form-varient " />
            <button className="btn btn-primary ms-5 mt-3 ">SUBMIT</button>
        
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
