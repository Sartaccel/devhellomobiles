import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";

export default function ContactForm() {
  const shapesRef = useRef([]);
  const animationRef = useRef(null);

  /* Floating animation */
  useEffect(() => {
    const animate = () => {
      shapesRef.current.forEach((shape, i) => {
        if (!shape) return;
        const time = Date.now() * 0.001 + i * 2;
        const y = Math.sin(time * 0.5) * 20;
        const rotation = time * 30;
        shape.style.transform = `translateY(${y}px) rotate(${rotation}deg)`;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <>
      {/* 🔹 Banner Section */}
      <div className="contact-banner-wrapper">
        <div
          className="contact-banner-bg"
          style={{
            backgroundImage: "url('/images/contact_bg.png')",
          }}
        ></div>

        <div className="contact-banner-content fade-in-up">
          <h2 className="contact-top-title">Contact Us</h2>

          <h3 className="contact-top-subtitle">We’d Love to Hear From You</h3>

          <p className="contact-top-desc">
            Whether you have a question, need product details or just want to
            say hello, we’re here to help. Visit our store, give us a call or
            drop us a message anytime.
          </p>
        </div>
      </div>

      {/* 🔹 Main Contact Container */}
      <div className="contact-container">

        {/* LEFT: MAP */}
        <div className="contact-map-section">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.5985238525059!2d77.29252181024393!3d8.295432320324268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04560ea7eafaa3%3A0xf30c0536ee31ac09!2sHELLO%20MOBILES%20%26%20FUTURE%20STORE!5e1!3m2!1sen!2sin!4v1763457160928!5m2!1sen!2sin"
          ></iframe>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="contact-info-section">

          {/* Floating Shapes */}
          <div
            className="contact-floating-shape contact-shape-1"
            ref={(e) => (shapesRef.current[0] = e)}
          ></div>

          <div
            className="contact-floating-shape contact-shape-2"
            ref={(e) => (shapesRef.current[1] = e)}
          ></div>

          <div
            className="contact-floating-shape contact-shape-3"
            ref={(e) => (shapesRef.current[2] = e)}
          ></div>

          <div className="contact-info-content">
            <div className="contact-company-logo">
              <img src="./images/logo.png" alt="Company Logo" />
            </div>

            <h2 className="contact-info-title">Building Smart Choices</h2>

            <p className="contact-info-description">
              We bring you the best quality and trust in every purchase.
            </p>

            {/* Contact Details */}
            <div className="contact-info-list">
              <div className="contact-info-item">
                📧 text2rafeek@gmail.com
              </div>

              <div className="contact-info-item">
                📞 +91 89039 39390  
                <br />
                📞 +91 89036 36361
              </div>

              <div className="contact-info-item">
                📍 18/143-1 AL Noor Tower, Verkilambi, 629166
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social-links">
              <a
                href="https://www.facebook.com/share/1DJAi5zpqv/"
                target="_blank"
                className="contact-social-link"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="https://www.instagram.com/hello._mobiles/"
                target="_blank"
                className="contact-social-link"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://wa.me/9342429191"
                target="_blank"
                className="contact-social-link"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
