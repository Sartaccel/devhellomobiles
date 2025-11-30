import React from 'react'
import "./About.css";
function About() {
  return (
    <>
{/* --------------------------------------------------------hero section--------------------------------------------*/ }

    <section className="About-hero d-flex justify-content-center align-items-center">
      <div className=' hero-box d-flex justify-content-center align-items-center'>
        <h1>About Us</h1>
        <p> “More than a store, a trusted name for 13 years.”</p>
      </div>
    </section>
{/* --------------------------------------------------------storysection--------------------------------------------*/ }
<section className="storysection d-flex justify-content-center align-items-center">
  <h1>Our Story</h1>
    <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
      <img
        src="./images/aboutlogo.png"
        className="img-fluid rounded-start"
        alt="Card"
      />
    </div>

    <div className="col-12 col-md-12 col-lg-6 col-xl-8 col-xxl-8">
      <div className="card-body">
        <h5 className="card-title">Our Journey</h5>
        <p className="card-text">
         Hello Mobiles began its journey 13 years ago as a small mobile shop located on Verkilambi. The store started with a simple mission to offer quality products and trustworthy service to everyone who visited. In the early days, the shop focused on selling mobile phones and basic accessories, slowly building trust within the community.

With continuous customer support and a strong commitment to genuine products, the store began to grow steadily. Over time, Hello Mobiles expanded its range by adding mobile accessories, handbags, watches, lifestyle gadgets and many other useful products based on what customers needed.

From a small and humble shop in Verkilambi, Hello Mobiles has grown into a multi category lifestyle store that people rely on for quality, variety and honest service. Even today, the same dedication that started the journey 13 years ago continues to guide every step forward.
        </p>
        <p className="card-button">
          <a href="/products">View Products</a>
        </p>
      </div>
    </div>
  </div>
</div>
</section>
{/* --------------------------------------------------------Founder section--------------------------------------------*/ }

<section className="founder-section container py-5">
  <div className="founder-card row align-items-center fade-in">

    {/* LEFT TEXT */}
    <div className="col-12 col-lg-6 order-2 order-lg-1 founder-text-box slide-up">
      <h2 className="founder-title">Our Founder</h2>
      <h5 className="founder-role">Mr.Rafeek Ahmed, CEO & Founder</h5>

      <p className="founder-text">
  I started Hello Mobiles with a simple vision to offer genuine products,
  fair pricing and trusted service to every customer. What began as a small 
  shop in Verkilambi has grown into a brand that people trust for mobiles, 
  accessories and lifestyle products.
</p>

<p className="founder-text">
  My commitment to honesty, customer care and long term service continues 
  to guide Hello Mobiles forward. I am grateful for the trust and support 
  of every customer who has been part of this journey.
</p>


      <p className="founder-signature">— Mr.Rafeek Ahmed</p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="col-12 col-lg-6 order-1 order-lg-2 text-center slide-up delay-1">
      <img
        src="/images/founder.png"
        className="founder-img img-fluid"
        alt="Founder"
      />
    </div>

  </div>
</section>



{/* --------------------------------------------------------Mission& values section--------------------------------------------*/ }
<section className="mission-section container py-5">
  <h2 className="mission-title text-center mb-4">Our Mission & Values</h2>

  <p className="mission-description text-center mb-5">
    At Hello Mobiles, our mission is to provide genuine products, reliable service 
    and a seamless shopping experience for every customer. Our values guide 
    everything we do, ensuring trust and satisfaction for all.
  </p>

  <div className="row g-4 justify-content-center">

    <div className="col-12 col-md-6 col-lg-3">
      <div className="mission-card text-center">
        <i className="bi bi-shield-check mission-icon"></i>
        <h4>Quality First</h4>
        <p>We offer genuine and trusted products that ensure long-term reliability.</p>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="mission-card text-center">
        <i className="bi bi-people mission-icon"></i>
        <h4>Customer Care</h4>
        <p>We focus on understanding customer needs and offering the right solutions.</p>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="mission-card text-center">
        <i className="bi bi-cash-coin mission-icon"></i>
        <h4>Fair Pricing</h4>
        <p>Honest and transparent pricing to ensure real value for money.</p>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="mission-card text-center">
        <i className="bi bi-lightning-charge mission-icon"></i>
        <h4>Innovation</h4>
        <p>We bring the latest trends, gadgets, and lifestyle products for our customers.</p>
      </div>
    </div>
    </div>
    </section>
{/* --------------------------------------------------------What We Offersection--------------------------------------------*/ }
<section className="offer-section py-5">

  <div className="container text-center">

    <h1 className="offer-main-heading">What We Offer</h1>

    <h2 className="offer-title">Explore Our Product Range</h2>

    <p className="offer-subtitle">
      At Hello Mobiles, we bring together technology and lifestyle under one roof. 
      Explore our wide range of collections designed to make life smarter, simpler and stylish.
    </p>

    <div className="row g-4 justify-content-center mt-4">

      <div className="col-6 col-md-4 col-lg-3">
        <div className="offer-item">
          <i className="bi bi-phone offer-icon"></i>
          <p>Mobiles & Accessories</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-3">
        <div className="offer-item">
          <i className="bi bi-headphones offer-icon"></i>
          <p>Computer & Electronic Accessories</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-3">
        <div className="offer-item">
          <i className="bi bi-gift offer-icon"></i>
          <p>Perfumes & Gifts</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-3">
        <div className="offer-item">
          <i className="bi bi-emoji-smile offer-icon"></i>
          <p>Toys & Kids' World</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-3">
        <div className="offer-item">
          <i className="bi bi-watch offer-icon"></i>
          <p>Watches & Clocks</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-3">
        <div className="offer-item">
          <i className="bi bi-bag offer-icon"></i>
          <p>Ladies Handbags</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-3">
        <div className="offer-item">
          <i className="bi bi-box-seam offer-icon"></i>
          <p>Imported Sweets & Nuts</p>
        </div>
      </div>

      <div className="col-6 col-md-4 col-lg-3">
        <div className="offer-item">
          <i className="bi bi-house-heart offer-icon"></i>
          <p>Kitchen Utilities</p>
        </div>
      </div>

    </div>
  </div>

</section>
{/*--------------------------------------------------------customer section-------------------------------------------*/ }
<section className="closing-box-section">
  <div className="closing-box container text-center">

    <h2 className="closing-tagline">
      “More than a store, a trusted name for 13 years.”
    </h2>

    <p className="closing-thanks">
      We thank every customer for being part of our journey.
    </p>

    <div className="closing-buttons">
      <a href="/contact" className="closing-btn-outline">Contact Us</a>
    </div>

  </div>
</section>


    </>
  )
}

export default About