import React from "react";

const Footer = () => {
  return (
    <div className="footer-w3ls">
      <div className="footer-dot">
        <div className="container py-md-4 py-3">
          <div className="contact-center">
            <div className="footer-logo pt-2 mb-sm-5 mb-3 text-center">
              <h2>
                <a href="index.html">
                  <i className="fa fa-book mr-2" aria-hidden="true"></i>
                  Arpit's Travel Dairies
                </a>
              </h2>
              <p className="px-lg-5 mt-4 text-white">
                Welcome to "Arpit's Travel Diaries," your ultimate destination
                for immersive travel stories and adventures! Here, I share my
                passion for exploring new places, cultures, and experiences.
              </p>
            </div>
            <div className="row border-top">
              <div className="col-lg-6 col-md-4 footer-grid">
                <div className="justify-content-center contact-g2 mx-auto">
                  <h6 className="footer-wthree">Follow us</h6>
                  <div className="address-grid">
                    <ul className="social-icons3">
                      <li>
                        <a href="#facebook" className="s-iconfacebook">
                          <span className="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#twitter" className="s-icontwitter">
                          <span className="fa fa-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#instagram" className="s-iconinstagram">
                          <span className="fa fa-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 border-left footer-grid">
                <div className="subscribe-grid">
                  <h6 className="footer-wthree">Signup to our newsletter</h6>
                  <form method="post" className="form-inline">
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="Subscribe"
                      required=""
                    />
                    <button className="btn1">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cpy-right text-center py-4 mt-4">
          <p className="text-white">
            © 2024. All rights reserved | Design by
            <a href="./" className="text-white">
              {" "}
              anonymous.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
