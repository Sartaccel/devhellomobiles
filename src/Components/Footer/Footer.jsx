import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 1️⃣ Logo and Description */}
        <div className="footer-section">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            Hello Mobiles – your trusted destination for the latest smartphones,
            gadgets, and accessories at unbeatable prices.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Our Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
         
            {/* 3️⃣ 📞 Contact Info — NEW SECTION */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li><i className="fas fa-map-marker-alt"></i>  
              18/143-1 AL Noor Tower <br /> Verkilambi ,629166
            </li>
            <li><i className="fas fa-phone"></i>  
            890 39 39 390<br /> 890 36 36 361
            </li>
            <li><i class="fab fa-whatsapp"></i>
             +91 93 4242 9191
            </li>
            <li><i className="fas fa-envelope"></i>  
              text2rafeek@gmail.com
            </li>
          </ul>
        </div>
        {/* 3️⃣ Follow Us */}
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1DJAi5zpqv/" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/hello._mobiles/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a  href="https://wa.me/9342429191" target="_blank"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <a href="https://enterkeysolutions.com/" target="_blank" style={{color:"white"}}> Enterkey Solutions</a>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
