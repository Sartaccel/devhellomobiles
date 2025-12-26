import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-container">

          {/* 1️⃣ Logo and Description */}
          <div className="col-lg-4 col-md-6 col-12 footer-section">
            <img
              src="./images/logo.png"
              alt="Logo"
              className="footer-logo"
            />
            <p className="footer-description">
              Hello Mobiles delivering the latest smartphones smart gadgets and
              quality accessories with exceptional service and value.
            </p>
          </div>

          {/* 2️⃣ Quick Links */}
          <div className="col-lg-2 col-md-6 col-12 footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Our Products</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* 3️⃣ Contact Info */}
          <div className="col-lg-3 col-md-6 col-12 footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <a
                  href="https://www.google.com/maps/place/HELLO+MOBILES+%26+FUTURE+STORE/"
                  target="_blank"
                  rel="noreferrer"
                >
                  18/143-1 AL Noor Tower <br /> Verkilambi, 629166
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+918903939390">
                  +91 89039 39390 <br /> +91 89036 36361
                </a>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <a href="https://wa.me/9342429191" target="_blank" rel="noreferrer">
                  +91 93424 29191
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:text2rafeek@gmail.com">
                  text2rafeek@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* 4️⃣ Follow Us */}
          <div className="col-lg-3 col-md-6 col-12 footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1DJAi5zpqv/" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/hello._mobiles/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/9342429191" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p> © {new Date().getFullYear()}{" "}
  <a
    href="https://enterkeysolutions.com/"
    target="_blank"
    rel="noreferrer"
    style={{ color: "white" }}
  >
    Enterkey Solutions
  </a>
  . All rights reserved.
</p>

      </div>
    </footer>
  );
}

export default Footer;
